<template>
  <div class="index container row">
    <div class="card col col-md-4 col-lg-4" v-for="smoothie in smoothies" v-bind:key="smoothie.id">
        <img v-bind:src="smoothie.img" class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">{{smoothie.title}}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="(ing,index) in smoothie.ingredients" v-bind:key="index">{{ing}}</li>
        </ul>
        <div class="card-body">
            <router-link :to="{name: 'EditSmoothie', params: {slug: smoothie.slug} }">Edit</router-link>
            <a href="#" class="card-link" v-on:click="deleteItem(smoothie.id)">Delete</a>
        </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/Init'

export default {
    name: 'Index',
    data() {
        return {
            smoothies: [],
        }
    },
    methods: {
        deleteItem(id){
            db.collection('smoothies').doc(id).delete()
                .then( () => {
                    alert('Smoothie Recipe Deleted!')
                    this.smoothies = this.smoothies.filter( item => {
                        return item.id != id
                    })
                })
        }
    },
    created() {
        db.collection('smoothies').get()
            .then(snapshots => {
                snapshots.forEach(doc => {
                    let data = doc.data()
                    data.id = doc.id
                    this.smoothies.push(data)
                });
            })
    }
}
</script>

<style lang="scss">
    .index {
        margin: 60px auto 0;
        
    }
</style>
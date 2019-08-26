<template>
  <div class="edit-smoothie container">
    <form v-on:submit.prevent="updateSmoothie" v-if="smoothie">
        <div class="form-group">
            <label>Smoothie Title:</label>
            <input type="text" class="form-control" v-model="smoothie.title">
        </div>
        <div class="form-group">
            <label>Img URL:</label>
            <input type="text" class="form-control" v-model="smoothie.img">
            <img if="smoothie.img" v-bind:src="smoothie.img" width="300">
        </div>
        <div v-if="smoothie.ingredients" v-for="(ing,index) in smoothie.ingredients" v-bind:key="index" class="form-group">
            <label>Ingredient #{{index+1}}</label>
            <input type="text" class="form-control" v-model="smoothie.ingredients[index]">
            <i class="material-icons" v-on:click="deleteIng(index)">delete_forever</i>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/Init'
import slugify from 'slugify'

export default {   
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: {},
            ingredients: []
        }
    },
    methods: {
        updateSmoothie(){
            this.smoothie.slug = slugify(this.smoothie.title, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true
            })
            db.collection('smoothies').doc(this.smoothie.id).update({
                title: this.smoothie.title,
                img: this.smoothie.img,
                ingredients: this.smoothie.ingredients,
                slug: this.smoothie.slug
            })
            .then( () => {
                alert('Recipe updated!')
                this.$router.push({name: 'Index'})
            })
        },
        deleteIng(index){
            this.smoothie.ingredients.splice(index, 1)
        }
    },
    created() {
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.slug)
        ref.get().then( snapshots => {
            snapshots.forEach(doc => {
                this.smoothie = doc.data()
                this.smoothie.id = doc.id
            });
        })
    }

}
</script>

<style lang="scss" scoped>
    .edit-smoothie {
        max-width: 550px;
        margin-top: 60px;
    }
    .form-group {
        position: relative;
        i {
            position: absolute;
            right: 5px;
            top: 40px;
            cursor: pointer;
        }
    }
</style>
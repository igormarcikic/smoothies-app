<template>
  <div class="add-smoothie container">
    <form v-on:submit.prevent="addSmoothie">
        <div class="form-group">
            <label>Smoothie Title:</label>
            <input type="text" class="form-control" placeholder="Enter title..." v-model="title">
        </div>
        <div class="form-group">
            <label>Img URL:</label>
            <input type="text" class="form-control" placeholder="Image..." v-model="img">
            <img if="img" v-bind:src="img" width="300">
        </div>
        <div class="form-group">
            <label>Add ingredient:</label>
            <input type="text" class="form-control" placeholder="Add ingredient..." v-on:keydown.tab.prevent="addIngredient" v-model="ingredient">
            <small class="form-text text-muted">Press tab to add ingredient.</small>
        </div>
        <div v-if="ingredients" v-for="(ing,index) in ingredients" v-bind:key="index" class="form-group">
            <label>Ingredient #{{index+1}}</label>
            <input type="text" class="form-control" v-model="ingredients[index]">
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
    name: 'AddSmoothie',
    data() {
        return {
            title: null,
            ingredients: [],
            ingredient: null,
            img: null,
            slug: null
        }
    },
    methods: {
        addSmoothie(){
            if(this.title){
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection('smoothies').add({
                    title: this.title,
                    img: this.img,
                    ingredients: this.ingredients,
                    slug: this.slug
                })
                .then( () => {
                    alert('Smoothie Recipe Added')
                    this.$router.push({name: 'Index'})
                })
            } else {
                alert('You need to add title!')   
            }
            },
        addIngredient(){
            this.ingredients.push(this.ingredient)
            this.ingredient = null
        },
        deleteIng(index){
            this.ingredients.splice(index, 1)
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
    .add-smoothie{
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
<script setup>
import {ref,watch} from 'vue';
import app from './App.vue'
import home from '@/views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: '/about',
      name: 'about',
      component: AboutPage
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router













</script>

<template>
  <img class="img" src="logo.png">
<h1>Welcome to Calendar for schoolars by schoolars</h1>

</template>
<style>
h1{
font-size: 45px;    
text-align: center;
color: rgb(49, 166, 255);
}
.img{

display: block;
margin-left: auto;
margin-right: auto;
width: 25%;
}


</style>

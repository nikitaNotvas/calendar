<script setup>
import {ref,watch} from 'vue';

</script>

<template>
  <nav>
    <router-link to="/">home</router-link><br>
    <router-link to="/about">about</router-link><br>
    
  </nav>
  <img class="img" src="logo.png">
<h1>Welcome to Calendar for schoolars by schoolars</h1>

<router-view></router-view>

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

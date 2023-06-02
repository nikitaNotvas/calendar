<script setup>
import {ref,watch} from 'vue';


async function asyncFunction() { const result = await fetch('https://holidays.abstractapi.com/v1/'); console.log(result)}

</script>

<template>
  <nav>
    <v-card>
    <v-tabs bg-color="blue"  center-active>
      <v-tab><router-link  font-weight-bold to="/">Home</router-link></v-tab>
      <v-tab> <router-link to="/about">About</router-link></v-tab>
      <v-tab><router-link to="/team">More about project</router-link></v-tab>
      <v-tab><router-link to="/moreaboutus">Team</router-link></v-tab>
      <v-tab @click="asyncFunction"> fetch button</v-tab>
      <v-tab></v-tab>
      <v-tab></v-tab><hr>
      <img class="smallogo" src="logo.png">
    </v-tabs>
  </v-card>
    
    
  </nav>


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
p{
    font-size: 45px;    
text-align: center;
color: rgb(49, 166, 255);
}
    .smollogo{
      display: block;

      width: 10px;
    }

</style>

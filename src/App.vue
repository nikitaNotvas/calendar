<script setup>
import {ref,watch} from 'vue';



function httpGetAsync(url, callback) {
                  const xmlHttp = new XMLHttpRequest();
                  xmlHttp.onreadystatechange = function() {
                      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                      callback(xmlHttp.responseText);
                  }
                  xmlHttp.open("GET", url, true); // true for asynchronous
                  xmlHttp.send(null);
              }

              const url = "https://holidays.abstractapi.com/v1/?api_key=fc5eef450b284fbb8e9e28b37bdd4ff3&country=US&year=2020&month=12&day=25"

              httpGetAsync(url)
</script>

<template>
  <nav>
    <v-card>
    <v-tabs bg-color="blue"  center-active>
      <v-tab><router-link  font-weight-bold to="/">Home</router-link></v-tab>
      <v-tab> <router-link to="/about">About</router-link></v-tab>
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

<template>
  <v-app id="app">
    <!-- header -->
    <!-- <header-site style="z-index:100" /> -->
    <!-- main -->
    <v-main class=" mt-2" style="min-height:80vh">
      <router-view />
    </v-main>
    <!-- footer -->
    <!-- <footer-site /> -->
  </v-app>
</template>
<script setup>
import { RouterView } from "vue-router";


</script>

<script>
import '@/assets/css/main.css'
// import HelloWorld from './components/HelloWorld';
// import HeaderSite from './components/HeaderSite.vue';
// import FooterSite from './components/FooterSite.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    // HeaderSite,
    // FooterSite
  },

  data: () => ({
    //
  }),

};
</script>

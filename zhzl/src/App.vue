<script setup lang="ts">

import GolbalHeader from "./components/GolbalHeader.vue";
import ColumnItem from "./components/ColumnItem.vue"
import Footer from "./components/Footer.vue";







</script>



<template>
  <div >
    <GolbalHeader />

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>

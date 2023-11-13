<script setup lang="ts">
    import {useRoute,useRouter} from "vue-router"
    defineProps(['list'])

    const route = useRoute();
    const router = useRouter();


    const skipDetail = (id) => {
        console.log(id)
    }
</script>

<template>
  <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 ">
    <div class="col" v-for="item in list" :key="item.id">
        <div class="card text-center item">
            <div><img :src="item.img" class="img-thumbnail card-img-top rounded-circle img" alt="..."></div>
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text column-description" >{{ item.description }}</p>
                <router-link :to="`/column/${item.id}`" class="btn btn-primary" @click="skipDetail(item.id)">进入专栏</router-link>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
    .item {
        padding: 10px;
    }
    .img {
        width: 50px;
        height: 50px;
    }
    .column-description {
        height: 60px;
    }
</style>

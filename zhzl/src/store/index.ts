import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserInfoStore = defineStore("userInfo",() => {
    const userInfo = reactive({
        isLogin:false,
        name:"QuanM",
        img:"xxx"
    })

    return {userInfo}
})
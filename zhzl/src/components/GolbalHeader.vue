<script setup lang="ts">

    import { useUserInfoStore } from "../store/index.js"

    import Dropdown from './Dropdown.vue';
    import DropdownItem from './DropdownItem.vue';


    const userInfo = useUserInfoStore();

    // const loginInfo = {
    //     isLogin:true,
    //     name:"QuanM",
    //     img:"xxx"
    // }

</script>

<template>
    <div class="p-3 bg-primary headers mb-4" >
        <div class="container ">
            <div class="d-flex flex-wrap align-items-center  justify-content-between ">
                <div><router-link to="/" class="nav-link">QuanMou专栏</router-link></div>
                <div v-if="userInfo.userInfo.isLogin">
                    <Dropdown :title="userInfo.userInfo.name">
                        <DropdownItem>
                            <router-link to="#">新建文章</router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link to="#">编辑资料</router-link>
                        </DropdownItem>
                        <DropdownItem>
                            <router-link to="#">退出登录</router-link>
                        </DropdownItem>
                    </Dropdown>
                </div>
                <div v-else class="login">
                        <button type="button" class="btn border text-white ">
                            <router-link to="/login" class="nav-link">登录</router-link>
                        </button>
                        <button type="button" class="btn border text-white register">
                            <router-link to="/signup" class="nav-link">注册</router-link>
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scope>
    .headers {
        color: #ffff;
        font-size: 18px;
        
    }

    .register{
        margin-left: 10px;
    }
</style>

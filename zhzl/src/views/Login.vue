<script setup lang="ts">
    import ValidateForm from '../components/ValidateForm.vue';
    import ValidateInput from '../components/ValidateInput.vue';

    import {ref} from "vue"

    const emailValue = ref<String>("");
    const emailRules = [
        {
        type:'required',
        message:"电子邮箱地址不能为空"
        },
        {
        type:"email",
        message:"请输入正确的电子邮箱格式"
        }
    ]


    const passwordValue = ref<String>("");
    const passwordRules = [
        {
        type:'required',
        message:"密码不能为空"
        }
    ]

</script>

<template>
    <div class="container login w-330 ">

        <h3 class="text-center my-4 fs-5">登录到者也</h3>
        <ValidateForm>
            <ValidateInput v-model="emailValue" placeholder="请输入邮箱" :rules="emailRules" @update:modelValue="(value:string) => {emailValue = value}">
                <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
            </ValidateInput>
            <ValidateInput v-model="passwordValue" placeholder="请输入密码" :rules="passwordRules"  @update:modelValue="(value:string) => {passwordValue = value}">
                <label for="exampleInputEmail1" class="form-label">密码</label></ValidateInput>
        </ValidateForm>
        <div>
            <router-link to="/signup" class="fs-6">还没有账户？去注册一个新的吧！</router-link>
        </div>
        <div class="mt-3 text-center">
            <button type="button" class="btn btn-primary">登录</button>
        </div>
    </div>
</template>


<style scope>
   .login {
    /* background-color:pink; */
   }
   .w-330 {
    width: 330px;
    padding:1px;
   }
</style>

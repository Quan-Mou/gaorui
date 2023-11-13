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

    const nickNameValue = ref("")
    const nickNameRules = [
        {
        type:'required',
        message:"昵称不能为空"
        }
    ]


    const passwordValue = ref<String>("");
    const passwordRules = [
        {
        type:'required',
        message:"密码不能为空"
        }
    ]

    const verify = ref('')
    const verifyRules = [
        {
        type:'same',
        message:"两次密码不一致"
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
            <ValidateInput v-model="nickNameValue" placeholder="请输入昵称" :rules="nickNameRules"  @update:modelValue="(value:string) => {passwordValue = value}">
                <label for="exampleInputEmail1" class="form-label">昵称</label>
            </ValidateInput>
            <ValidateInput v-model="passwordValue" placeholder="请输入密码" :rules="passwordRules"  @update:modelValue="(value:string) => {passwordValue = value}">
                <label for="exampleInputEmail1" class="form-label">密码</label>
            </ValidateInput>
            <ValidateInput v-model="verify" placeholder="请再次输入密码" :rules="verifyRules"  @update:modelValue="(value:string) => {passwordValue = value}">
                <label for="exampleInputEmail1" class="form-label">重复密码</label>
            </ValidateInput>
        </ValidateForm>
        <div>
            <router-link to="/login" class="fs-6">已经有账户？去登录</router-link>
        </div>
        <div class="mt-3 text-center">
            <button type="button" class="btn btn-primary">注册</button>
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

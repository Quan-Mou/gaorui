<script setup lang="ts">
    import {reactive,ref,useAttrs} from "vue"





    const attrs = useAttrs();



    defineOptions({
        inheritAttrs:false
    })





    const prop = defineProps({
        modelValue:String,
         rules:Array
    })

    const emit = defineEmits(['update:model-value'])





    const inputValue = reactive({
        err:false,
        message:'',
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateHandler(e) {
        if(prop.rules) {
            // debugger
            console.log(prop.rules)
            const pass = prop.rules.every(rule => {
                let pass = true
                inputValue.message = rule.message
                switch(rule.type) {
                    case "required":
                    pass = !(prop.modelValue?.trim() == '')
                        break;
                    case "email":
                        if(prop.modelValue != undefined) {
                            pass = emailRegex.test(prop.modelValue)
                        }
                        break;
                    case "same":
                        
                        break;
                    default:
                }
                return pass;
            })
            inputValue.err = !pass;
        }
    }




</script>

<template>
        <div class="mb-3">
            <slot></slot>
            <!-- border-danger -->
            <input type="email" :placeholder="attrs.placeholder" :class="{'form-control':true,'border-danger ':inputValue.err}" c id="exampleInputEmail1" aria-describedby="emailHelp" @blur="validateHandler" @input="(e) => {emit('update:model-value',e.target.value)}" :value="modelValue" >
            <div id="emailHelp" v-if="inputValue.err" class="form-text  text-danger">{{ inputValue.message }} </div>
        </div>
</template>


<style scope>
   
</style>

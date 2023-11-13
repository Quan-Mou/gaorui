<script setup lang="ts">

    defineProps(['title'])

</script>

<template>
            <div class="dropdown">
                        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            你好 {{ title }}
                         </button>
                        <ul class="dropdown-menu">
                           <slot></slot>
                        </ul>
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

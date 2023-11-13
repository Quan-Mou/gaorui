<script setup lang="ts">

import ColumnItem from "../components/ColumnItem.vue"


interface dataType {
    id:number,
    description:string,
    title:string,
    follow:string
  }

  const data:dataType = [
    {
      id:1,
      description:"BioEngX-专业生物技术社区, 地址 www.bioengx.co",
      title:'考研干货分享',
      img:"https://picx.zhimg.com/v2-dfe6ffbbaaf0174109684287a7c30b05_l.jpg?source=d16d100b"
    },
    {
      id:2,
      description:"经验超市app为大家整理最干货的考研经验，大家可以",
      title:'BioEng',
      img:"https://picx.zhimg.com/v2-dfe6ffbbaaf0174109684287a7c30b05_l.jpg?source=d16d100b"
    },
    {
      id:3,
      description:"专栏涉及算法或者推断架构代码见https://github.com/AlphaSmartDog/DeepLearni",
      title:'自然语言处理训练营',
      img:"https://picx.zhimg.com/v2-dfe6ffbbaaf0174109684287a7c30b05_l.jpg?source=d16d100b"
    },
    {
      id:4,
      description:"自然语言处理，机器学习相关学习材料",
      title:1,
      img:"https://picx.zhimg.com/v2-dfe6ffbbaaf0174109684287a7c30b05_l.jpg?source=d16d100b"
    }
  ]

</script>

<template>
        <div class="">
            <ColumnItem :list="data"/>
        </div>
</template>


<style scope>
   
</style>

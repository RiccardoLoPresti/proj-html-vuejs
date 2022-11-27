<script>

import {store} from '../data/store.js'

export default {
    name:'Collage',
    props:{
        type:Object
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div class="box-collage d-flex flex-wrap">
    <div v-for="pic in type" :key="pic" class="img">
        <img :src="pic" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-collage{
    margin-bottom: 20px;
    width: 100%;
    height: 700px;
    //background-color: rgba(155, 3, 137, 0.132);
    .img{
        width: calc(100% / 3);
    }
}
</style>
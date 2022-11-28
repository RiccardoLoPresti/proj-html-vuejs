<script>

import {store} from '../data/store.js'

export default {
    name:'Collage',
    props:{
        typeMain:Object,
        typeInsta:Object
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
    <div v-for="pic in typeMain || typeInsta" :key="pic" class="img">
        <img :src="pic || pic.img" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box-collage{
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    .img{
        width: calc(100% / 3);
    }
}
</style>
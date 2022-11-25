<script>

import {store} from '../data/store.js'

export default {
    name:'Collage',
    props:{
        type:String
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div class="box-collage">

  </div>
</template>

<style lang="scss" scoped>
.box-collage{
    width: 600px;
    height: 600px;
    background-color: azure;
}
</style>
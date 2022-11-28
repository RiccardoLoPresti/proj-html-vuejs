<script>

import {store} from '../data/store.js'

export default {
    name:'CardsText',
    props:{
        type: String
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <!--STAMPO GLI ITEM IN BASE AL TYPE PASSATO TRAMITE PROPS-->
    <div v-for="item in store[type]" :key="item" class="custom-card ">
        <div class="box">
            
            <img :src="item.img" alt="">

            <div class="text">
            
                <span>{{item.cat}}</span>
                <h3>{{item.text}}</h3>
                <div class="overlay">
                    <p>{{item.description}}</p>
                </div>
    
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;
.custom-card{
    width: 100%;
    max-width: 450px;
    height: 250px;
    color: $white-color;
    img{
        filter:brightness(.6);
        object-fit: cover;
    }
    .box{
        position: relative;
    }
    .text{
        position: absolute;
        left: 0px;
        bottom: 0px;
        padding-bottom: 20px;
        padding-right: 25px;
        padding-left: 25px;
        span{
            @include badge('main');
        }
        h3{
            font-size: 1.2rem;
            font-weight: 800;
            text-transform: capitalize;
            margin-top: 10px;
            color: $white-color;
        }
        .overlay{
            display: none;
            font-size: .8rem;
            color: $text-grey-color;
            font-weight: 600;
            height: 60px;
            overflow: auto;
        }
    }
    .box:hover .overlay{
        display: block;
    }
}

</style>
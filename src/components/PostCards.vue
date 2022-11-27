<script>

import Collage from './Collage.vue';
import {store} from '../data/store.js'


export default {
    name:'CardsText',
    components:{
        Collage
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <div class="custom-card ">

        <div v-for="mainPost in store.mainPosts" :key="mainPost" class="box">

            <img v-if="mainPost.img.length == 1" :src="mainPost.img" :alt="mainPost.img">

            <div v-else class="collage-img">
                <Collage :typeMain="mainPost.img"/>
            </div>

            <div class="text-wrapper d-flex">

                <div class="calendar d-flex flex-column">
                    <span>{{mainPost.date.day}}</span>
                    <span>{{mainPost.date.month}}</span>
                </div>

                <div class="text ">

                    <h3>{{mainPost.text}}</h3>

                    <div class="description">
                        <p>{{mainPost.description}}</p>
                    </div>

                    <div class="info d-flex justify-content-between">

                        <div class="wrapper d-flex">

                            <div class="author">
                                <i class="fa-regular fa-user"></i>
                                <span>By <a :href="mainPost.author.href">{{mainPost.author.name}}</a></span>
                            </div>

                            <div class="category">
                                <i class="fa-regular fa-folder"></i>
                                <a :href="mainPost.cat.href">{{mainPost.cat.badge}}</a>
                            </div>

                            <div class="comments">
                                <i class="fa-regular fa-comments"></i>
                                <a :href="mainPost.comments.href">{{mainPost.comments.number}}</a>
                            </div>

                        </div>

                        <div class="read-more">
                            <a href="#">Read More</a>
                        </div>
                        
                    </div>

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
    .box{
        margin-bottom: 30px;
    }
    .box:last-child{
        margin-bottom: 20px;
    }
    img{
        height: 436px;
        width: 1052px;
        object-fit: cover;
        margin-bottom: 20px;
    }
    .text-wrapper{
        padding-bottom: 20px;
        .calendar{
            height: 100%;
            span:first-child{
                display: inline-block;
                background: $bg-very-ligth-grey-color;
                height: 45px;
                width: 35px;
                text-align: center;
                line-height: 45px;
                font-weight: 600;
                font-size: .9rem;
            }
            span:last-child{
                display: inline-block;
                color: $white-color;
                text-transform: uppercase;
                font-size: .55rem;
                background: $bg-very-dark-grey-color;
                height: 20px;
                width: 35px;
                text-align: center;
                line-height: 20px;
            }
        }
        .text{
            margin-left: 20px;
            h3{
                font-size: 1.5rem;
                font-weight: 600;
                text-transform: capitalize;
                margin-top: 5px;
                margin-bottom: 15px;
            }
            .description{
                font-size: .85rem;
                color: $text-dark-grey-color;
                line-height: 25px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            .info{
                padding-top:20px ;
                padding-bottom:30px ;
                color: $text-dark-grey-color;
                font-size: .8rem;
                border-bottom: 1px solid $border-eeee-color;
                .author, .category, .comments{
                    padding-right: 10px;
                    span, a{
                        padding-left: 7px;
                        text-transform: capitalize;
                    }
                    a{
                        color:$text-main-color;
                    }
                    a:first-child{
                        padding: 0;
                    }
                }
                .read-more{
                    text-transform: uppercase;
                    border: 1px solid $border-bfbf-color;
                    border-radius: 5px;
                    font-size: .6rem;
                    text-align: center;
                    padding: 4px 10px;
                    a{
                        color:  $text-dark-grey-color;
                        display: inline-block;
                    }
                }
                
            }
        }
        
        
    }
}

</style>
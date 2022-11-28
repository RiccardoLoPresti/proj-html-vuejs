<script>

import PostCards from './PostCards.vue';
import Collage from './Collage.vue';
import Pagination from './Pagination.vue';

import {store} from '../data/store.js'


export default {
    name:'AppMain',
    components:{
        PostCards,
        Collage,
        Pagination
    },
    data(){
        return{
            store,
            tags:[
                {
                    cat:'design',
                    url:'#'
                },
                {
                    cat:'brands',
                    url:'#'
                },
                {
                    cat:'video',
                    url:'#'
                },
                {
                    cat:'business',
                    url:'#'
                },
                {
                    cat:'travel',
                    url:'#'
                },
            ],
            twitterPosts:[
                {
                    text:'Lorem ipsum dolor sit amet dsadasdas consectetur.',
                    data:'01:05 PM Sep 18th',
                },
                {
                    text:'Lorem ipsum aiai dolor sit amet dsadasdas consectetur.',
                    data:'01:04 PM Sep 18th',
                }
            ]
        }
    }
}
</script>

<template>
  
    <main>
        <div class="container h-100">
            <div class="row h-100">

                <!--MAIN POSTS-->
                <div class="col-xxl-9">

                    <!--POSTCARDS-->
                    <PostCards/>

                    <!--PAGINAZIONE-->
                    <Pagination/>
                    
                </div>
                <!--/MAIN POSTS-->

                <!--ASIDE POSTS-->
                <div class="col-xxl-3">
                    
                    <!--TWITTER POSTS-->
                    <div class="twitter">

                        <h3>latest from twitter</h3>

                        <div v-for="twitterPost in twitterPosts" :key="twitterPost" class="latest d-flex">

                            <i class="fa-brands fa-twitter"></i>

                            <div class="text">
                                <p class="m-0">{{twitterPost.text}}</p>
                                <div class="data">
                                    <p>{{twitterPost.data}}</p>
                                </div>
                            </div>

                        </div>
                       
                    </div>
                    <!--/TWITTER POSTS-->

                    <!--INSTAGRAM POSTS-->
                    <div class="instagram">

                        <a href="#">
                            <h3>latest from instagram</h3>

                            <div  v-for="el in store.insta" :key="el" class="box-insta">

                                <!--PASSO COME PROPS AL COLLAGE GLI ELEMENTI INSTA-->
                                <Collage :typeInsta="el.img"/>

                            </div>
                        </a>

                    </div>
                    <!--/INSTAGRAM POSTS-->

                    <!--TAGS-->
                    <div class="tags">
                        <h3>tags</h3>
                        <div v-for="tag in tags" :key="tag" class="pills">
                            <a :href="tag.url">{{tag.cat}}</a>
                        </div>
                    </div>
                    <!--/TAGS-->

                    <!--FACEBOOK POST-->
                    <div class="facebook pb-5">
                        <h3>find us on facebook</h3>
                        <a href="#">Okler Themes</a>
                    </div>
                    <!--/FACEBOOK POST-->

                </div>

            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

.row{
    padding-top: 60px;
    h3{
        padding-bottom: 10px;
    }
    
    .latest{
        padding-bottom: 10px;
        i{
            font-size: 1.3rem;
            padding-right: 10px;
        }
        span{
            display: block;
        }
        .text{
            p{
                font-size: .9rem;
            }
            .data{
                padding-top: 3px;
                color: $text-main-color;
            }
        }
    }
    .instagram{
        padding-top: 30px;
        cursor: pointer;
    }
    .tags{
        padding-bottom: 100px;
    }
    .pills{
        margin-right:5px;
        @include badge('small-rounded');
        a{
            color: $white-color;
        }
    }
    .facebook{
        a{
            border-left: 4px solid $border-eeee-color;
            color:$text-main-color;
            padding: 10px 15px;
            font-size: .9rem;
        }
    }
}

</style>
<script>

import CardsText from './CardsText.vue';

export default {
    name:'AppInfo',
    components:{
        CardsText
    },
    data(){
        return{
            populars:[
                {
                    img:'../src/assets/images/blog-55.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-56.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-57.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-58.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-59.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
            ],
            recents:[
                {
                    img:'../src/assets/images/blog-65.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-66.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-67.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-68.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
                {
                    img:'../src/assets/images/blog-69.jpg',
                    text:'how to take better concert pictures in 30 seconds',
                    data:'january, 12, 2022'
                },
            ],
            authors:[
                {
                    name:'jhon doe',
                    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum ad provident neque beatae quia animi possimus, minima illo!',
                    avatar:'../src/assets/images/avatar.jpg'
                }
            ]
        }
    }
}
</script>

<template>

  <section>
    <div class="container h-100">

        <div class="row h-100">

            <!--POPULAR POST-->
            <div class="col-xxl-4 col-lg-6">
                
                <div class="post-wrapper ">

                    <h3 class="m-0">Popular posts</h3>

                    <div v-for="popular in populars" :key="popular" class="posts d-flex">
                        <div class="box-img d-flex align-items-center">
                            <img :src="popular.img" alt="">
                        </div>
                        <div class="text">
                            <h6 class="m-0">{{popular.text}}</h6>
                            <span>{{popular.data}}</span>
                        </div>
                    </div>

                </div>

            </div>
            <!--/POPULAR POST-->

            <!--RECENT POST-->
            <div class="col-xxl-4 col-lg-6">

                <div class="post-wrapper ">

                    <h3 class="m-0">Recent posts</h3>

                    <div v-for="recent in recents" :key="recent" class="posts d-flex">
                        <div class="box-img d-flex align-items-center">
                            <img :src="recent.img" alt="">
                        </div>
                        <div class="text">
                            <h6 class="m-0">{{recent.text}}</h6>
                            <span>{{recent.data}}</span>
                        </div>
                    </div>
                    
                </div>

            </div>
            <!--/RECENT POST-->

            <!--FEATURED POST-->
            <div class="col-xxl-4 col-lg-6">

                <h3 class="m-0">featured posts</h3>

                <div class="box-card">

                    <!--PASSO COME TYPE PROPS INFO A CARDTEXT-->
                    <CardsText type="info"/>

                </div>

                <div class="post-wrapper">

                    <h3 class="mb-1">featured Author</h3>

                    <div v-for="author in authors" :key="author" class="posts d-flex">

                        <div class="box-img d-flex align-items-center">
                            <img id="avatar" :src="author.avatar" :alt="author.name">
                        </div>

                        <div  class="text">
                            <h6 id="author">{{author.name}}</h6>
                            <span>
                                {{author.text}}
                            </span>
                        </div>

                    </div>

                </div>

            </div>
            <!--/FEATURED POST-->

        </div>

    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.container{
    margin-top:50px;
    margin-bottom:60px;
    h3{
        padding-bottom: 5px;
    }
    .post-wrapper{
        .posts{
            border-bottom: 1px dotted $text-dark-grey-color;
            margin: 2px 0;
            &:last-child{
                border-bottom: none;
            }
            img{
                width: 50px;
                height: 50px;
                margin-right: 10px;
                object-fit: cover;
            }
            .text{
                max-width: 335px;
                padding: 10px 10px;
                h6, span, #author{
                    text-transform: capitalize;
                }
                h6{
                    font-size: .85rem;
                }
                span{
                    font-size: .7rem;
                    color:$text-dark-grey-color ;
                }
            }
            #avatar{
                min-width: 110px;
                height: 110px;
            }
            #author{
                font-size: 1rem;
                padding-bottom: 5px;
                font-weight: 700;
            }
        }
    }
    .box-card{
        margin-top: 35px;
        margin-bottom: 32px;
        height: 185px;
    }
}

</style>
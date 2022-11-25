<script>

import Collage from './Collage.vue';


export default {
    name:'CardsText',
    components:{
        Collage
    },
    data(){
        return{
            items:[
                {
                    text:'how to make friends as a grown-up',
                    img:'../src/assets/images/blog-54.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
                    author: {
                        name:'john doe',
                        href:'#'
                    },
                    cat:{
                        badge:'lifestyle, travel',
                        href:'#'
                    },
                    comments:{
                        number:'12 comments',
                        href:'#'
                    },
                    date:{
                        day:12,
                        month: 'jan'
                    }
                },
                {
                    text:'simple ways to have a pretty face',
                    img:'../src/assets/images/blog-55-big.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
                    author: {
                        name:'john doe',
                        href:'#'
                    },
                    cat:{
                        badge:'photography, travel',
                        href:'#'
                    },
                    comments:{
                        number:'12 comments',
                        href:'#'
                    },
                    date:{
                        day:12,
                        month: 'jan'
                    }
                },
                {
                    text:'ranking the greatest player in basketball',
                    img:'../src/assets/images/blog-56-big.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
                    author: {
                        name:'john doe',
                        href:'#'
                    },
                    cat:{
                        badge:'sport, business',
                        href:'#'
                    },
                    comments:{
                        number:'12 comments',
                        href:'#'
                    },
                    date:{
                        day:12,
                        month: 'jan'
                    }
                },
                {
                    text:'top camper trailer towing tips',
                    img:'../src/assets/images/blog-58-big.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
                    author: {
                        name:'john doe',
                        href:'#'
                    },
                    cat:{
                        badge:'travel, lifestyle',
                        href:'#'
                    },
                    comments:{
                        number:'12 comments',
                        href:'#'
                    },
                    date:{
                        day:12,
                        month: 'jan'
                    }
                },
                {
                    text:'10 best travel tips after 5 years traveling the word',
                    img:'../src/assets/images/blog-58-big.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?',
                    author: {
                        name:'john doe',
                        href:'#'
                    },
                    cat:{
                        badge:'travel, lifestyle',
                        href:'#'
                    },
                    comments:{
                        number:'12 comments',
                        href:'#'
                    },
                    date:{
                        day:12,
                        month: 'jan'
                    }
                }
            ]
        }
    }
}
</script>

<template>

    <div class="custom-card ">

        <div v-for="item in items" :key="item" class="box">

            <img :src="item.img" :alt="item.img">

            <div class="text-wrapper d-flex">

                <div class="calendar d-flex flex-column">
                    <span>{{item.date.day}}</span>
                    <span>{{item.date.month}}</span>
                </div>

                <div class="text ">

                    <h3>{{item.text}}</h3>

                    <div class="description">
                        <p>{{item.description}}</p>
                    </div>

                    <div class="info d-flex justify-content-between">

                        <div class="wrapper d-flex">

                            <div class="author">
                                <i class="fa-regular fa-user"></i>
                                <span>By <a :href="item.author.href">{{item.author.name}}</a></span>
                            </div>

                            <div class="category">
                                <i class="fa-regular fa-folder"></i>
                                <a :href="item.cat.href">{{item.cat.badge}}</a>
                            </div>

                            <div class="comments">
                                <i class="fa-regular fa-comments"></i>
                                <a :href="item.comments.href">{{item.comments.number}}</a>
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
        margin-bottom: 50px;
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
                border-bottom: 1px dotted $text-dark-grey-color;
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
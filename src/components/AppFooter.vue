<script>

import {store} from '../data/store.js'

export default {
    name:'AppFooter',
    data(){
        return{
            store
        }
    }
}
</script>

<template>

    <footer>

        <div class="banner">
            <p>get in touch</p>
        </div>
        <div class="shadow"></div>

        <div class="top-footer">

            <div class="container">

                <div class="row">

                    <div class="col-xxl-4 col-xl-6 col-md-6" >
                        <div class="about" >
                            <h3>About the blog</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam, consectetur </p>

                            <h4>view more  <i class="fa-solid fa-chevron-right"></i> </h4>
                        </div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-md-6">
                        <div class="about">
                            <h3>recent posts</h3>

                            <div class="wrapper d-flex">

                                <img src="../assets/images/our-office-4-square.jpg" alt="office">

                                <div class="text">
                                    <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam</p>
                                    <span>12:53 Am dec 19th</span>
                                </div>
                            </div>
                            
                            <div class="wrapper d-flex">

                                <img src="../assets/images/our-office-5-square.jpg" alt="office">

                                <div class="text">
                                    <p class="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate quibusdam </p>
                                    <span>12:53 Am dec 19th</span>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div class="col-xxl-3 col-xl-3 col-md-6">
                        <div class="recent-comments">
                            <h3>recent comments</h3>

                            <p><i class="fa-solid fa-chevron-right"></i> <span>John Doe</span> Lorem ipsum <span>dolor sit amet consectetur adipisicing elit. </span> </p>

                            <p><i class="fa-solid fa-chevron-right"></i> <span>John Doe</span> Lorem ipsum <span>dolor sit amet consectetur adipisicing elit. </span></p>

                        </div>
                    </div>

                    <div class="col-xxl-2 col-md-6">
                        <div class="about">
                            <h3>categories</h3>
                            <div v-for="category in store.categories" :key="category" class="cat">
                                <a :href="category.url">{{category.name}}</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="bottom-footer">

            <div class="container h-100">

                <div class="row h-100">

                    <div class="col d-flex justify-content-between">

                        <div class="left d-flex align-items-center">
                            <div class="logo ">
                                <img src="../assets/images/logo-footer.png" alt="logo-footer">
                            </div>
                            <div class="copyright">
                                <i class="fa-regular fa-copyright"></i>
                                <span>Copyright 2020. All Rights Reserved.</span>
                            </div>
                        </div>

                        <div class="right d-flex align-items-center">
                            <div class="info">
                                <a href="#">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>FAQ'S</span>
                                </a>
                                
                            </div>
                            <div class="info">
                                <a href="#">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>Sitemap</span>
                                </a>
                              
                            </div>
                            <div class="info">
                                <a href="#">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <span>contact us</span>
                                </a>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

        

    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

footer{
    position: relative;
    z-index: 99;
}
    .banner{
        z-index:1;
        text-align: center;
        line-height: 45px;
        color: $white-color;
        text-transform: capitalize;
        font-size: 1.4rem;
        font-family:$secondary-font;
        position: absolute;
        top: -15px;
        right: calc(100% - 397px);
        width: 145px;
        height: 45px;
        background-color:$bg-main-color;
    }
    .shadow{
        z-index:-1;
        position: absolute;
        top: 17px;
        right: calc(100% - 377px);
        transform: rotate(28deg);
        width: 145px;
        height: 45px;
        background-color:darken($bg-main-color, 20%);
    }
.top-footer{
    background-color: $bg-very-dark-grey-color;
    padding-top: 80px ;
    padding-bottom: 100px;
    h3,h4{
        text-transform: uppercase;
        font-size: .8rem;
        color: $white-color;
        padding-bottom: 10px;
    }
    h4, i{
        font-weight: 700;
    }
    .about{
        color: $text-dark-grey-color;
        p,h4{
            font-size: .8rem;
            line-height: 25px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        i{
            font-size: .6rem;
        }
        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }
        span{
            font-size: .7rem ;
        }
    }
    .wrapper{
        padding-bottom: 20px;
        .text{
            padding-left: 20px;
            p{
                color: $text-grey-color;
            }
        }
    }
    .recent-comments{
        i{
            font-size: .6rem;
        }
        p{
            color: $text-grey-color;
            font-size: .8rem ;
        }
        span:first-of-type{
            font-weight: 800;
        }
        span:last-of-type, i{
            color:$text-main-color;
            font-weight: 600;
        }
    }
    .cat{
        @include badge('');
        background-color: $black-color;
        margin: 5px 5px;
        &:hover{
                background-color: lighten($black-color, 10%);
            }
        a{
            display: inline-block;
            color:$white-color;
        }
    }
}
//BOTTOM FOOTER
.bottom-footer{
    background-color: $bg-dark-carbon-color;
    color: $text-5555-dark-grey-color;
    font-size: .7rem;
    height: 95px;
    .logo{
        cursor: pointer;
        img{
            width: 70px;
            filter: invert(61%) sepia(10%) saturate(75%) hue-rotate(169deg) brightness(91%) contrast(84%);
        }
    }
    .copyright{
        margin-left: 50px;
    }
    .info{
        margin-right: 15px;
        text-transform: capitalize;
        a{
            color: $text-dark-grey-color;
            &:hover{
                color: $text-grey-color;
                text-decoration: underline;
            }
        }
        i{
            font-size: .5rem;
            padding-right: 5px;
            line-height: 2px;
        }

    }
}
</style>
<script>

import PostCards from './PostCards.vue';
import Pagination from './Pagination.vue';

export default {
    name:'AppMain',
    components:{
        PostCards,
        Pagination
    },
    data(){
        return{
            tags:[
                {
                    cat:'design',
                    ulr:'#'
                },
                {
                    cat:'brands',
                    ulr:'#'
                },
                {
                    cat:'video',
                    ulr:'#'
                },
                {
                    cat:'business',
                    ulr:'#'
                },
                {
                    cat:'travel',
                    ulr:'#'
                },
            ]
        }
    }
}
</script>

<template>
  
    <main>
        <div class="container h-100">
            <div class="row h-100">

                <div class="col-xxl-9">

                    <PostCards/>
                    <Pagination/>
                    
                </div>

                <div class="col-xxl-3">

                    <div class="twitter">
                        <h3>latest from twitter</h3>

                        <div class="latest d-flex">

                            <i class="fa-brands fa-twitter"></i>

                            <div class="text">
                                <p class="m-0">Lorem ipsum dolor sit amet dsadasdas consectetur.</p>
                                <div class="data">
                                    <p>data</p>
                                </div>
                            </div>

                        </div>
                        <div class="latest d-flex">

                            <i class="fa-brands fa-twitter"></i>

                            <div class="text">
                                <p class="m-0">Lorem ipsum dolor sit amet dsadasdas consectetur.</p>
                                <div class="data">
                                    <p>data</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="instagram">
                        <h3>latest from instagram</h3>

                        <!--CONTENUTO QUI-->
                    </div>

                    <div class="tags">
                        <h3>tags</h3>
                        <div v-for="tag in tags" :key="tag" class="pills">
                            <a :href="tag.ulr">{{tag.cat}}</a>
                        </div>
                    </div>

                    <div class="facebook pb-5">
                        <h3>find us on facebook</h3>
                        <a href="#">Okler Themes</a>
                    </div>

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
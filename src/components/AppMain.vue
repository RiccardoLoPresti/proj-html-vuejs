<script>

import PostCards from './PostCards.vue';

export default {
    name:'AppMain',
    components:{
        PostCards
    }
}
</script>

<template>
  
    <main>
        <div class="container h-100">
            <div class="row h-100">

                <div class="col-xxl-9">
                    <PostCards/>
                </div>

                <div class="col-xxl-3 debug">

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


                    </div>
                </div>

            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

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
}

</style>
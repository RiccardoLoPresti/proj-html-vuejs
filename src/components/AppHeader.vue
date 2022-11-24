<script>
export default {
    name:'AppHeader',
    data(){
        return{
            slogan: 'Everything about Lifestyle, Travel and Gadgets!',
            secondaryNav:[
                {
                    name:'sign in',
                    url:'#'
                },
                {
                    name:'about us',
                    url:'#'
                },
                {
                    name:'contact us',
                    url:'#'
                },
                {
                    name:'buy now',
                    url:'#'
                }
            ]
        }
    }
}
</script>

<template>

  <header>
    <!--SIGN-IN BAR-->
    <div class="sign-in-bar">
        <div class="container h-100 ">
            <div class="row h-100">

                <!--SLOGAN-->
                <div class="col-auto slogan d-flex align-items-center ">
                    <span>{{slogan}}</span>
                </div>

                <!--SECONDARY NAV-->
                <div class="col-auto secondary-nav ">
                    <ul class=" d-flex h-100 align-items-center">
                        <li v-for="item in secondaryNav" :key="item">
                            <a :href="item.url">{{item.name}}</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <!--/SIGN-IN BAR-->

  </header>
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.sign-in-bar{
    height: 50px;
    background: $bg-main-color;
    color: $white-color;
    font-size: .73rem;
    .slogan{
        padding-left: 10px;
        padding-right: 5px;
    }
    .secondary-nav{
        padding: 0;
        ul{
            padding: 0;
        }
        li{
            padding: 0 10px;
        }
        a{
            color: $white-color;
            text-transform: uppercase;
        }
        
    }
}
</style>
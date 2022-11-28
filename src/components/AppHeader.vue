<script>
export default {
    name:'AppHeader',
    data(){
        return{
            isShow: false,
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
            ],
            mainNav:[
                {
                    name:'home',
                    url:'#',
                    current: true
                },
                {
                    name:'elements',
                    url:'#',
                    current: false
                },
                {
                    name:'features',
                    url:'#',
                    current: false
                },
                {
                    name:'pages',
                    url:'#',
                    current: false
                },
                {
                    name:'portfolio',
                    url:'#',
                    current: false
                },
                {
                    name:'blog',
                    url:'#',
                    current: false
                },
                {
                    name:'shop',
                    url:'#',
                    current: false
                }
            ],
        }
    },
    methods:{
        //funzione per rendere active l'elemento cliccato
        getActive(index){
            //ciclo per togliere tutti gli active
            this.mainNav.forEach(element => {
                element.current = false
            });
            //indico quale deve essere active passando indice
            this.mainNav[index].current = true
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
                <div class="col-auto secondary-nav p-0">
                    <ul class=" d-flex p-0 h-100 align-items-center">
                        <li v-for="secondaryNavItem in secondaryNav" :key="secondaryNavItem">
                            <a :href="secondaryNavItem.url">{{secondaryNavItem.name}}</a>
                        </li>
                    </ul>
                </div>
                <!--/SECONDARY NAV-->

            </div>
        </div>
    </div>
    <!--/SIGN-IN BAR-->

    <!--LOGO-->
    <div class="logo-wrapper">
        <div class="container h-100">
            <div class="row h-100">

                <div class="col logo d-flex align-items-center">
                    <img src="../assets/images/logo-default-slim.png" alt="porto">
                </div>

            </div>
        </div>
    </div>
    <!--/LOGO-->

    <!--MAIN NAV-->
    <nav>
        <div class="container h-100">
            <div class="row h-100 d-flex justify-content-between">

                <div class="col-10 nav h-100">
                    <ul class="d-flex flex-wrap h-100 d-flex align-items-center">
                        <li v-for="mainNavItem,index in mainNav" :key="index">
                            <a @click="getActive(index)" :class="{'active': mainNavItem.current}" :href="mainNavItem.url">{{mainNavItem.name}}</a>
                        </li>
                    </ul>
                </div>
                
                <div class="col-2 glass h-100 d-flex flex-column align-items-end justify-content-center">
                    <i @click="isShow = !isShow" class="fa-solid fa-magnifying-glass m-0"></i>
                    <input v-show="isShow" type="text" placeholder="Search">
                </div>
            </div>
        </div>
    </nav>
    <!--/MAIN NAV-->

  </header>

</template>

<style lang="scss" scoped>

@use '../styles/partials/vars' as *;

a{
    text-transform: uppercase;
}

/*SIGN-IN BAR*/
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
        li{
            padding: 0 10px;
        }
        a{
            color: $white-color;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
/*/SIGN-IN BAR*/

/*LOGO*/
.logo-wrapper{
    height: 120px;
    border-bottom: 1px solid $border-e2e2-color;
    .logo img{
        width: 100px;
    }
}
/*/LOGO*/

/*NAV*/
nav{
    height: 60px;
    .nav{
        ul{
            width: 100%;
            padding:0 10px;
        }
        li{
            padding-right:2%;
        }
        a{
            color: $text-4444-dark-grey-color;
            font-weight: 600;
            &:hover{
                color: $text-main-color;
            }
        }
        .active{
            color: $text-main-color;
        }
    }
    .glass{
        position: relative;
        input{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 16px;
            min-width: 70px;
            height: 43px;
            margin-right: 20px;
        }
        i{
            font-size: .8rem;
            padding-left: 16px;
            padding-top: 5px;
            padding-bottom: 5px;
            border-left:1px solid $border-eeee-color;
            cursor: pointer;
        }
    }
}

</style>
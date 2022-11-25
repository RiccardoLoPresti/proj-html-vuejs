<script>
export default {
    name:'AppFooter',
}
</script>

<template>

    <footer>
        <div class="top-footer debug">
            <div class="container">

                <div class="row">

                    <div class="col">
                        <div class="prova debug"></div>
                    </div>

                </div>
            </div>
        </div>

        <div class="bottom-footer debug">
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

.prova{
    height: 90px;
    background-color: azure;
}

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
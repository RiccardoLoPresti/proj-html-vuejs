<script>
export default {
    name:'CardsText',
    data(){
        return{
            items:[
                {
                    cat:'recipes',
                    text:'how to take better concert pictures in 30 seconds',
                    img:'../src/assets/images/blog-66.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
            ]
        }
    }
}
</script>

<template>
    <div v-for="item in items" :key="item" class="custom-card ">
        <div class="box">

            <img :src="item.img" alt="">

            <div class="text">
                <span>{{item.cat}}</span>
                <h3>{{item.text}}</h3>
                <div class="overlay">
                    <p>{{item.description}}</p>
                </div>
    
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.custom-card{
    max-width: 450px;
    height: 185px;
    min-height: 185px;
    position: relative;
    color: $white-color;
    .box{
        min-height: 185px;
    }
    img{
        filter:brightness(.6);
        height: 185px;
        object-fit: cover;
    }
    .text{
        position: absolute;
        left: 0px;
        bottom: 0px;
        padding-bottom: 20px;
        padding-right: 25px;
        padding-left: 25px;
        span{
            display: inline-block;
            background: $bg-main-color;
            text-transform: uppercase;
            font-weight: 800;
            font-size: .65rem;
            margin-bottom: 10px;
            padding: 5px 10px;
        }
        h3{
            font-size: 1.2rem;
            font-weight: 800;
            text-transform: capitalize;
        }
        .overlay{
            display: none;
            font-size: .8rem;
            color: $text-grey-color;
            font-weight: 600;
            height: 50px;
            overflow: auto;
        }
    }
    .box:hover .overlay{
        display: block;
    }
}

</style>
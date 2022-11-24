<script>
export default {
    name:'CardsText',
    data(){
        return{
            items:[
                {
                    cat:'photography',
                    text:'how to take better concert pictures in 30 seconds',
                    img:'../src/assets/images/blog-46.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
                {
                    cat:'gadgets',
                    text:'gadfets that make your smartphone even smarter',
                    img:'../src/assets/images/blog-47.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
                {
                    cat:'travel',
                    text:'20 top-rated tourist attractions ins manhattan',
                    img:'../src/assets/images/blog-48.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
                {
                    cat:'lifestyle',
                    text:'the best way to ride a motorcycle',
                    img:'../src/assets/images/blog-49.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
                {
                    cat:'travel',
                    text:'5 fun things to do at beach',
                    img:'../src/assets/images/blog-50.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                },
                {
                    cat:'recipes',
                    text:'amazingly fresh fruit and herb drinks for summer',
                    img:'../src/assets/images/blog-51.jpg',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore provident velit blanditiis exercitationem nisi fugit! Rem eaque atque numquam minima ut adipisci tempore debitis vero non, obcaecati nobis odit?'
                }
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
    width: 450px;
    height: 250px;
    min-height: 250px;
    position: relative;
    color: $white-color;
    .box{
        min-height: 250px;

    }
    img{
        filter:brightness(.6);
        height: 250px;
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
            height: 80px;
            overflow: auto;
        }
    }
    .box:hover .overlay{
        display: block;
    }
}

</style>
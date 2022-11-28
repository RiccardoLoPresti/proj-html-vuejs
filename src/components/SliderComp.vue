<script>

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default {
    name:'SliderComp',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [ Navigation],
    };
  },
  data(){
      return{
        items:[
                {
                  cat:'gadgets',
                  href: '#'
                },
                {
                  cat:'photography',
                  href: '#'
                },
                {
                  cat:'lifestyle',
                  href: '#'
                },
                {
                  cat:'fashion',
                  href: '#'
                },
                {
                  cat:'recipes',
                  href: '#'
                },
                {
                  cat:'travel',
                  href: '#'
                },
              ]
      }
    },
}

</script>

<template>
<swiper
    :slidesPerView="3"
    :spaceBetween="0"
    :slidesPerGroup="5"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in items" :key="item">{{item.cat}}</swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;


.swiper {
  width: 1420px;
  height: 150px;
}

.swiper-slide {
  margin-top: 59px;
  text-align: center;
  font-size: 18px;
  background: #fff;
}

</style>
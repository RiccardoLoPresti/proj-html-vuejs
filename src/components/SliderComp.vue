<script>

import {store} from '../data/store.js'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        store
      }
    },
}

</script>

<template>
  <div class="wrapper">
    <swiper
    :slidesPerView="5"
    :spaceBetween="10"
    :slidesPerGroup="5"
    :loop="false"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    >
    <swiper-slide v-for="item in store.categories" :key="item">
      <div class="badge">
        <a :href="item.url">{{item.name}}</a>
      </div>
    </swiper-slide>
  </swiper>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

.wrapper{
  background-color: $bg-main-color;
}

.swiper {
  width: 1420px;
  height: 150px;
}

.swiper-slide{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px
}

.swiper-slide .badge {
  @include badge('big');
  text-align: center;
  font-size: .8rem;
}

.badge:hover{
  background-color: lighten($bg-very-dark-grey-color, 10%);
}

a,a:hover{
  color: $white-color;
}

</style>
<script>

import SliderComp from './SliderComp.vue';

export default {
    name:'AppSliderBadge',
    components:{
      SliderComp
    },
}
</script>

<template>
  
  <section>
    <SliderComp/>



    <!--<div class="slider">
      <div class="container h-100 d-flex justify-content-center ">
        <div class="row h-100 d-flex align-items-center">

          <div class="col">

            <div class="box-badge d-flex flex-wrap justify-content-center">
              <div v-for="item in items" :key="item" class="badge">{{item.cat}}</div>
            </div>

            <div class="prev">
              <i class="fa-solid fa-chevron-left"></i>
            </div>

            <div class="next">
              <i class="fa-solid fa-chevron-right"></i>
            </div>

          </div>

        </div>
      </div>
    </div>-->
  </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;
.slider{
    min-height: 150px;
    background: $bg-main-color;
    .container{
      min-height: 150px;
      .row{
        min-height: 150px;
      }
    }
  .col{
    position: relative;
    .badge{
      @include badge('big');
       margin: 10px 17.5px;
      max-width: 185px;
      min-width: 185px;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    .prev,
    .next{
      position: absolute;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .prev{
      top: 50%;
      left: 0;
    }
    .next{
      top: 50%;
      right: 0;
    }
  }
}
</style>
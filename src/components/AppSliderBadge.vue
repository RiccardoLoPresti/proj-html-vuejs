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
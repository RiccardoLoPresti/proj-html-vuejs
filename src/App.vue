<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppJumbo from '../src/components/AppJumbo.vue'
import AppInfo from '../src/components/AppInfo.vue'
import AppSliderBadge from '../src/components/AppSliderBadge.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbo,
    AppInfo,
    AppSliderBadge
  }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
  <AppInfo/>
  <AppSliderBadge/>
</template>

<style lang="scss">
@use './src/styles/general';

</style>
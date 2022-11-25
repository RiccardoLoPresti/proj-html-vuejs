<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppJumbo from '../src/components/AppJumbo.vue'
import AppInfo from '../src/components/AppInfo.vue'
import AppSliderBadge from '../src/components/AppSliderBadge.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbo,
    AppInfo,
    AppSliderBadge,
    AppMain
  }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
  <AppInfo/>
  <AppSliderBadge/>
  <AppMain/>
</template>

<style lang="scss">
@use './src/styles/general';

</style>
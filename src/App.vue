<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppJumbo from '../src/components/AppJumbo.vue'
import AppInfo from '../src/components/AppInfo.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbo,
    AppInfo
  }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
  <AppInfo/>
</template>

<style lang="scss">
@use './src/styles/general';

</style>
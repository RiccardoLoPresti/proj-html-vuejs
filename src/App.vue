<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppJumbo from '../src/components/AppJumbo.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppJumbo
  }
}
</script>

<template>
  <AppHeader/>
  <AppJumbo/>
</template>

<style lang="scss">
@use './src/styles/general';

</style>
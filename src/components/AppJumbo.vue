<script>

import CardText from './CardsText.vue'

export default {
    name:'AppJumbo',
    components:{
        CardText
    }
}
</script>

<template>
  
  <section>
    <div class="jumbo">
        <div class="container">
            <div class="row">
                <div class="col-auto w-100 x d-flex justify-content-center flex-wrap">
                    <CardText/>
                </div>
            </div>
        </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.jumbo{
    padding: 50px 0;
    background: $bg-very-ligth-grey-color;
}
.x{
    gap: 30px;
}

</style>
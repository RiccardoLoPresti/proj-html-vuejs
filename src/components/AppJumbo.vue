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

                <div class="col-auto wrapper w-100 d-flex justify-content-center flex-wrap">
                    
                    <!--PASSO COME TYPE PROPS JUMBO A CARDTEXT-->
                    <CardText type="jumbo"/>

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
.wrapper{
    gap: 30px;
}
</style>
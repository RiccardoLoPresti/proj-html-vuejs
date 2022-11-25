<script>

import PostCards from './PostCards.vue';

export default {
    name:'AppMain',
    components:{
        PostCards
    }
}
</script>

<template>
  
    <main>
        <div class="container h-100">
            <div class="row h-100">

                <div class="col-xxl-9">
                    <PostCards/>
                </div>

                <div class="col-xxl-3">
                    <div class="colonna2"></div>
                </div>

            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
.row{
    padding-top: 60px;
}
.colonna2{
    height: 500px;
    background: rgb(45, 175, 173);
}
</style>
<script>
export default {
    name:'Pagination'
}
</script>

<template>
    <div class="pagination d-flex justify-content-end">
        <div class="navigation">
            <span><i class="fa-solid fa-chevron-left"></i></span>
            <span class="active">1</span>
            <span>2</span>
            <span>3</span>
            <span><i class="fa-solid fa-chevron-right"></i></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.pagination{
        padding-bottom: 70px;
    }
    .navigation{
        cursor: pointer;
        border: 1px solid $border-000f-color;
        border-radius: 5px;
        color: $text-main-color;
        i{
            font-size: .6rem;
        }
        span{
            border-left: 1px solid $border-000f-color;
            font-size: .9rem;
            display: inline-block;
            width: 30px;
            height: 35px;
            text-align: center;
            line-height: 35px;
        }
        span:first-child{
            border-left: none;
        }
        .active{
            background-color: $bg-main-color;
            color: $white-color;
        }
    }
</style>
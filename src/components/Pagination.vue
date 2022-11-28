<script>

import {store} from '../data/store.js'


export default {
    name:'Pagination',
    data(){
        return{
            store,
            currentPage: 1,
            resultsForPage: 5
        }
    },
    methods:{
        numPages(){
            return Math.ceil(store.mainPosts.length / this.resultsForPage)
        },
        changePage(page){
            if (page < 1) page = 1;
            if (page > this.numPages()) page = this.numPages();
        },
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage--
                this.changePage(this.currentPage)
                console.log(this.currentPage);
            }
        },
        nextPage(){
            if(this.currentPage < this.numPages()){
                this.currentPage++
                this.changePage(this.currentPage)
                console.log(this.currentPage);
            }
        },
        pagination(array){
            const page1 = array.slice(0,5)
            const page2 = array.slice(5,10)
            const page3 = array.slice(10,15)
            const page4 = array.slice(15,20)
            console.log(array);
            console.log(page1);
            console.log(page2);
            console.log(page3);
            console.log(page4);
        }
    },
    mounted(){
        this.pagination(store.mainPosts)
    }
}
</script>

<template>
    <div class="pagination d-flex justify-content-end">
        <div class="navigation">

            <span v-if="this.currentPage > 1" @click="prevPage()"><i class="fa-solid fa-chevron-left"></i></span>

            <span
             v-for="page,index in numPages()" :key="index" 
             :class="{'active': this.currentPage == page}"
            >
                {{page}}
            </span>

            <span v-if="this.currentPage < numPages()" @click="nextPage()"><i class="fa-solid fa-chevron-right"></i></span>
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
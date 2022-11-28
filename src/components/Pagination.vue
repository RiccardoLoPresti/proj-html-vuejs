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
            this.currentPage = page
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
            store.page1 = array.slice(0,5);
            store.page2 = array.slice(5,10);
            store.page3 = array.slice(10,15);
            store.page4 = array.slice(15,20);
        },
        getEmit(number){
            console.log('getEmit:',number);
            let emitOutput = this.$emit('changePage',number)
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
             @click="changePage(page)"
             :class="{'active': this.currentPage == page}"
            >
                {{page}}
            </span>

            <span v-if="this.currentPage < numPages()" @click="nextPage(), getEmit(this.currentPage)" ><i class="fa-solid fa-chevron-right"></i></span>
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
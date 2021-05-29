<template>
    <div class="subcategory">
        <ul>
            <li v-for="(category,index) in getCategory[selectedSubCategory].list" :key="index">
                <router-link :to="{name:'listProducts', params:{id:selectedSubCategory,subid:index}}" >{{category.name}} {{index}}</router-link>    
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name:'subcategory',
    data:function(){
        return{

        }
    },
    computed:{
        getCategory:function(){
            return this.$store.getters['getCategory'].category
        },
        selectedSubCategory:function(){
            return this.$route.params.id;
        }
    },
    methods:{
       
    },
}
</script>
<style lang="less" scoped>
.subcategory{
    ul{
        display: flex;
        flex-wrap: wrap;
        li{
            a{
                font-size: 18px;
                padding: 0 10px;
            }
        }
    }
}
</style>
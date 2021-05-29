<template>
    <div class="subcategory">
        <div class="wrapper">
            <ul>
                <li v-for="(category,index) in category[markedCategory].list" :key="index">
                    <router-link :to="{name:'listProducts', params:{mainCategory:markedCategory,extraCategory:index}}" >
                        <div class="photo" :style="{background:'center / contain no-repeat url(' + category.img + ') ',}"></div>
                        <span>{{category.name}}</span>
                    </router-link>    
                </li>
            </ul>
        </div>
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
        category:function(){
            console.log(this.$store.getters['category'].category)
            return this.$store.getters['category'].category
        },
        markedCategory:function(){
            return this.$route.params.id;
        }
    },
}
</script>
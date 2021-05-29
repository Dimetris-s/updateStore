<template>
    <div class="global_container">
        <div class="left-bar">
            <ul>
                <li>
                    <input type="text" style="width:100%;position:relative;" v-model="value" @click="openList()">
                    <div class="drop-list" v-if="filterProduct" :class="{active:isOpen}">
                        <ul>
                            <li v-for="(item,index) in filterProduct" :key="index">
                            <router-link :to="{name:'product',params:{code:item.artikl}}">{{item.artikl}}</router-link></li>
                        </ul>
                    </div>
                </li>
                <li><router-link :to="{name:'newProducts'}">Добавление товара</router-link></li>
                <li><router-link :to="{name:'brand'}">Добавление бренда</router-link></li>
                <li><router-link :to="{name:'promotions'}">Добавление акции</router-link></li>
                <li><router-link :to="{name:'blog'}">Добавление статьи в Блог</router-link></li>
                <li><router-link :to="{name:'gallery'}">Галерея</router-link></li>
                <li><router-link :to="{name:'slider'}">Слайдер</router-link></li>
                <li><router-link :to="{name:'popular'}">Популярное</router-link></li>
                <li><router-link :to="{name:'hit'}">Хиты</router-link></li>
                <li><router-link :to="{name:'recommend'}">рекомендуем</router-link></li>
                <li><router-link :to="{name:'discounts'}">Скидки</router-link></li>
                <li><router-link :to="{name:'sales'}">Расспродажи</router-link></li>
                <li v-for="(category,index) in category" :key="index"><router-link :to="{name:'subcategory',params:{id:index}}">{{category.name}}</router-link></li>
            </ul> 
        </div>
        <div class="right-bar">
            <router-view />
        </div>
    </div>
</template>

<script>
   module.exports = {
    name:'index',
    data: function(){
        return {
           value:'',
           isOpen:false,
        }
    },
    computed:{
        category(){
            return this.$store.getters['getCategory'].category;
        },
        productIndex(){
            return this.$store.getters['getProducts'].products;
        },
        filterProduct(){
            if(this.productIndex != undefined){
                return this.productIndex.filter((element) => {
                    if(element.artikl.indexOf(this.value) != -1){
                        return true
                    }else{
                        return false
                    }
                }) 
            }
        },
        
    },
    methods:{
        openList(){
            this.isOpen = !this.isOpen;
        }
    },
    created:function(){
        this.$store.dispatch('getCategory');
        this.$store.dispatch('getProducts');
        this.$store.dispatch('getSlide');
        this.$store.dispatch('getGallery');
        this.$store.dispatch('getPromotions');
        this.$store.dispatch('getBrand');
        this.$store.dispatch('getBlog');
    },
}
</script>

<template>
    <div class="global_container">
        <modalBasket ref="basketModal" ></modalBasket>
        <header>
            <nav>
                <div class="wrapper">
                    <div class="section_logo">
                        <h1 class="logo"><router-link :to="{name:'mainpage'}"> tartuga</router-link></h1>
                        <ul class="navigation">
                            <li><router-link :to="{name:'gallery'}">Галерея</router-link></li>
                            <li><router-link :to="{name:'gallery'}">Бренды</router-link></li>
                            <li><router-link :to="{name:'blog'}">Блог</router-link></li>
                            <li><router-link :to="{name:'delivery'}">Оплата и Доставка</router-link></li>
                            <li><router-link :to="{name:'company'}">О нас</router-link></li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <section >
                <div class="wrapper">
                    <div class="fixed_header">
                        <div class="dropdown_category" :class="{active:drop}">
                            <div class="drop_container">
                                <a class="drop_btn" @click="dropdown()">
                                    <span class="burger_menu">
                                        <span class="line_menu v1"></span>
                                        <span class="line_menu v2"></span>
                                    </span>
                                    <span class="xc">Каталог товаров</span>
                                </a>
                            </div>
                            <div class="drop_menu">
                                <ul>
                                    <li v-for="(category,index) in category" :key="index" @click="dropUp()">
                                    <router-link :to="{name:'subcategory',params:{id:index}}">
                                        {{category.name}}
                                    </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="all_block">
                            <div class="search">
                                <input type="text" v-model="value" @click="openList()">
                                <span class="fas fa-search"></span>
                                <div class="drop_list" v-if="filterProduct" :class="{active:isOpen}">
                                    <ul>
                                        <li v-for="(item,index) in filterProduct" :key="index">
                                            <router-link :to="{name:'product',params:{code:item.artikl}}">{{item.name}}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="basket">
                                <span @click="openBasket()"><span class="fas fa-shopping-bag"><span class="count_item" v-show="basket.length != 0">{{basket.length}}</span></span></span>
                                
                            </div>
                            <div class="currency">
                                <span @click="resetPrice()" class="fas fa-dollar-sign"></span>
                                <span @click="updatePrice()" class="fas fa-hryvnia"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <section class="footer_header">
                <h3><router-link :to="{name:'mainpage'}"> tartuga</router-link></h3>
                <ul>
                    <li><router-link :to="{name:'company'}">О нас</router-link></li>
                    <li><router-link :to="{name:'gallery'}">Галерея</router-link></li>
                    <li><router-link :to="{name:'gallery'}">Гарантия</router-link></li>
                    <li><router-link :to="{name:'delivery'}">Оплата и Доставка</router-link></li> 
                </ul>
                <ul>
                    <li><router-link :to="{name:'gallery'}">Бренды</router-link></li>
                    <li><router-link :to="{name:'promotions'}">Акции</router-link></li>
                    <li><router-link :to="{name:'blog'}">Блог</router-link></li>
                </ul>
                <div class="time_work">
                    <div class="weekdays">
                        <p>Понедельник - Суббота</p>
                        <span>с 9:00 до 18:00</span>
                    </div>
                    <div class="dayof">
                        <p>Воскресенье</p>
                        <span>Day off</span>
                    </div>
                </div>
            </section>
            <section class="footer_footer">
                <div class="wrapper">
                    <div class="social">
                        <div class="company">
                            <p>® company TARTUGA 2021</p>
                        </div>
                        <div class="icons">
                            <a href=""><span class="fab fa-instagram"></span></a>
                            <a href=""><span class="fab fa-telegram"></span></a>
                            <a href=""><span class="fab fa-facebook"></span></a>
                            <a href=""><span class="fab fa-youtube"></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <div class="wrapper">
            </div> -->
        </footer>
    </div>
</template>

<script>
   module.exports = {
    name:'index',
    data: function(){
        return {
            drop:false,
            isOpen:false,
            value:'',
            isOpenBasket:false,

        }
    },
    computed:{
        category(){
            return this.$store.getters['category'].category;
        },
        products(){
            return this.$store.getters['products'].products;
        },
        filterProduct(){
            if(this.products != undefined){
                return this.products.filter((element) => {
                    if(element.artikl.indexOf(this.value) != -1){
                        return true
                    }else{
                        return false
                    }
                }) 
            }
        },
        basket(){
           return this.$store.getters['getBaket'] 
        },
    },
    methods:{
        dropdown(){
            this.drop = !this.drop
        },
        openList(){
            this.isOpen = !this.isOpen
        },
        openBasket:function(){
            this.$refs.basketModal.openBasket();
        },
        dropUp(){
            this.drop = false;
        },
        resetPrice(){
            
        },
        updatePrice(){
            console.log(1)
            this.products.price =Number.parseInt(this.products.price)*28;
        }
    },
    components:{
        'modalBasket':require('./../vue/components/basket.vue')
    },
    created:function(){
        this.$store.dispatch('getCategory');
        this.$store.dispatch('getProducts');
        this.$store.dispatch('getSlider');
        this.$store.dispatch('getGallery');
        this.$store.dispatch('getPromotions');
        this.$store.dispatch('getLS');
        this.$store.dispatch('getBrand');
    },
}
</script>
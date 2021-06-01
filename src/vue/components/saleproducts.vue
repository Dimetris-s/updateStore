<template>
    <section class="profitable_offer">
        <div class="wrapper">
            <div class="profitable_title">
                <h2>Выгодные предложения</h2>
            </div>
            <div class="profitable_navigation">
                <button class="btn" @click="saleProduct()">Скидки</button>
                <button class="btn" @click="discountProduct()">Расспродажи</button>
            </div>
            <div class="profitable_container swiper-container" v-swiper="{loop: true,
                    slidesPerView:4,
                    spaceBetween:30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },}">
                <div class="swiper-wrapper">
                    <article class="profitable_card swiper-slide" v-for="(product,index) in products" :key="index">
                        <div class="product">
                            <router-link :to="{name:'selectProduct',params:{code:product.artikl}}">
                                <img :src="product.img[0].url" alt="">
                                <h3>{{product.name}}</h3>
                                <p v-if="product.rebate">Скидка: {{ product.rebate }}%</p>
                                <div class="brand" v-for="(elem,index) in brand" :key="index">
                                    <img v-if="elem.name == product.brand" :src="elem.img">
                                </div>
                            </router-link>
                            <span class="by_price">
                                <span class="old_price"><span class="fas fa-dollar-sign"></span>{{product.price}}</span>
                                <span class="new_price"><span class="fas fa-dollar-sign"></span>{{Number.parseInt(product.price) - (Number.parseInt(product.price) * Number.parseInt(product.rebate)/100)}}</span>
                                <!-- <button @click="moveToBasket(product)" v-if="!itemsBasket.some(el => el.artikl == product.artikl)">
                                    <span>Купить</span>
                                </button>
                                <span v-else>товар в корзине</span> -->
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>   

<script>
module.exports = {
    data:function(){
        return {
           isActive:false,
           products:[]
        }
    },
    methods:{
        action(){
            this.isActive = !this.isActive;
        },
        saleProduct(){
            this.storeProducts
            let saleProduct = this.storeProducts.filter(el =>{
                if(el.sales == true){
                    return true
                }else{
                    return false
                }
            })
            this.products = saleProduct
            
            console.log('sale');
        },
        discountProduct(){
            this.storeProducts
            let discountProduct = this.storeProducts.filter(el =>{
                if(el.discounts == true){
                    return true
                }else{
                    return false
                }
            })
            this.products = discountProduct
            console.log('discount')
        }
    },
    computed:{
        brand(){
            return this.$store.getters['getBrand'].brand
        },
        storeProducts(){
            this.products = this.$store.getters['products'].products;
            return  this.$store.getters['products'].products;
        }
    },
    mounted(){
        
    }
}
</script>
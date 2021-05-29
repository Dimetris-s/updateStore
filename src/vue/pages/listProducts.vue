<template>
    <div class="list_products">
        <div class="wrapper">
            <div class="cards_box">
                <article class="card_product" v-for="(product,index) in products" :key="index">
                    <div class="product">
                        <router-link :to="{name:'selectProduct',params:{code:product.artikl}}">
                            <img :src="product.img[0].url" alt="">
                            <h3>{{product.name}}</h3>
                            <p v-if="product.rebate">Скидка: {{ product.rebate }}%</p>
                            <div class="brand" v-for="(elem,index) in brand" :key="index">
                                <img v-if="elem.name == product.brand" :src="elem.img">
                                <!-- <div class="photo"  :style="{background:'center / contain no-repeat url(' + elem.img + ') ',}"> -->
                                
                                <!-- </div> -->
                            </div>
                        </router-link>
                        <span class="by_price">
                            <span>{{Number.parseInt(product.price) - (Number.parseInt(product.price) * Number.parseInt(product.rebate)/100)}}</span>
                            <span></span>
                        </span>
                        <button @click="moveToBasket(product)" v-if="!itemsBasket.some(el => el.artikl == product.artikl)">
                            <span>Купить</span>
                        </button>
                        <span v-else>товар в корзине</span>
                    </div>
                </article>
            </div>
            <p v-if="products.length === 0 "> Товар отсутвует</p>   
        </div>
    </div>
</template>

<script>
module.exports = {
    name:'listProducts',
    data:function(){
        return{
            
        }
    },
    computed:{
        selectCategory(){
            return [this.$route.params.mainCategory,this.$route.params.extraCategory];
        },
        products(){
            let getProduct = this.$store.getters['products'].products;
            return getProduct.filter((product)=>{
                if(product.category[0] == this.selectCategory[0] && product.category[1] == this.selectCategory[1]){
                    return true  
                } else {
                    return false
                }
            });
        },
        itemsBasket(){
            return this.$store.getters['getBaket'];
        },
        brand(){
            console.log(this.$store.getters['getBrand'].brand);
            return this.$store.getters['getBrand'].brand;
        }
    },
    methods:{
        moveToBasket(item){
            this.$store.dispatch('setBasket',item)
        }
    },
    
}
</script>


<template>
    <div class="offer_page">
        <div class="card" style="width: 18rem;" v-for="(product,index) in filterProduct" :key="index">
            <img :src="product.img[0].url" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.artikl}}</p>
                <a class="btn btn-primary" @click="deleteOffer(product.artikl)">Удалить товар из скидок</a>
            </div>
        </div>
    </div>    
</template>

<script>
module.exports = {
    data:function(){
        return{
            vendorCode:[]
        }
    },
    computed:{
        allProducts(){
            return this.$store.getters['getProducts'].products;
        },
        filterProduct(){
            let filterProd = this.allProducts;
            return filterProd.filter((product) => {
                if(product.discounts === true){
                    this.vendorCode.push(product.artikl);
                    return true    
                } else{
                    return false
                }
            })
        },

    },
    methods:{
        deleteOffer(code){
            console.log(code)
            let globalIndex ='';
            this.allProducts.forEach((element,index) => {
                if(element.artikl === code){
                    globalIndex = index
                }
            });
            this.allProducts[globalIndex].discounts = false;
            this.$store.dispatch('rewriteProduct', this.allProducts);
        }
    }
}
</script>

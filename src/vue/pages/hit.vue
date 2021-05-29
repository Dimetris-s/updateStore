<template>
    <div class="offer_page">
        <div class="card" style="width: 18rem;" v-for="(product,index) in filterProduct" :key="index">
            <img :src="product.img[0].url" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.artikl}}</p>
                <a class="btn btn-primary" @click="deleteHit(product.artikl)">Удалить товар из хитов</a>
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
                if(product.hit === true){
                    this.vendorCode.push(product.artikl);
                    return true    
                } else{
                    return false
                }
            })
        },

    },
    methods:{
        deleteHit(code){
            console.log(code)
            let globalIndex ='';
            this.allProducts.forEach((element,index) => {
                if(element.artikl === code){
                    globalIndex = index
                }
            });
            this.allProducts[globalIndex].hit = false;
            this.$store.dispatch('rewriteProduct', this.allProducts);
        }
    }
}
</script>
<template>
    <article class="card-product">
        <div class="card" style="width: 18rem;">
            <img :src="getProduct[getIdProduct].img[0].url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{getProduct[getIdProduct].name}}</h5>
                <p class="card-text">{{getProduct[getIdProduct].artikl}}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <input type="checkbox" id="checkbox" v-model="getProduct[getIdProduct].available">
                    <label for="checkbox" v-if="getProduct[getIdProduct].available == true">есть в наличии</label>
                    <label for="checkbox" v-if="getProduct[getIdProduct].available == false">нету в наличии</label>
                </li>
                <li class="list-group-item">
                   <p>скидка: <input type="text" v-model="getProduct[getIdProduct].rebate"></p>
                </li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link" v-if="getProduct[getIdProduct].hit === false" @click="addToHit()">add to hit</a>
                <a href="#" class="card-link" v-if="getProduct[getIdProduct].recommend === false" @click="addToRecommend()">add to recommend</a>
                <a href="#" class="card-link" v-if="getProduct[getIdProduct].discounts === false" @click="addToDiscounts()">add to discounts</a>
                <a href="#" class="card-link" v-if="getProduct[getIdProduct].sales === false" @click="addToSales()">add to sales</a>
                <a href="#" class="card-link" v-if="getProduct[getIdProduct].popular === false" @click="addToPopular()">add to popular</a>
            </div>
            <div class="card-body">
                <a href="#" class="card-link" @click="saveChange()">save change</a>
                <a class="card-link" @click="deleProduct()">удалить товар</a>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {
    data:function(){
        return{
            inputValue:'',
        }
    },
    computed:{
        getProduct:function(){
            return this.$store.getters['getProducts'].products;
        },
        getCodeProduct:function(){
            return this.$route.params.code;
        },
        getIdProduct: function(){
            const product = this.getProduct;
            let idProduct = 0; 
            for(let i=0; i<product.length;i++){
                if(product[i].artikl == this.getCodeProduct){
                    idProduct = i;
                }
            }
            
            return idProduct
        },
       
    },
    methods:{
        addToHit(){
            this.getProduct[this.getIdProduct].hit = true;
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        addToRecommend(){
            this.getProduct[this.getIdProduct].recommend = true;
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        addToDiscounts() {
            this.getProduct[this.getIdProduct].discounts = true;
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        addToSales(){
            this.getProduct[this.getIdProduct].sales = true;
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        addToPopular(){
            this.getProduct[this.getIdProduct].popular = true;
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        saveChange(){
            console.log(this.getProduct[this.getIdProduct])
            this.$store.dispatch('rewriteProduct',this.getProduct);
        },
        deleProduct(){
            console.log(this.getIdProduct);
            this.$store.dispatch('deleteImage',this.getProduct[this.getIdProduct].artikl)
            this.getProduct.splice(this.getIdProduct,1)
            this.$store.dispatch('rewriteProduct', this.getProduct)
        },
    },
}
</script>
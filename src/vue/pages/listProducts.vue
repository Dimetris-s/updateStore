<template>
    <div class="list-product">
        <div class="card" style="width: 18rem;" v-for="(produc,index) in filteredProducts" :key="index">
            <img :src="produc.img[0].url" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title"><router-link :to="{name:'product',params:{code:produc.artikl}}">{{produc.name}}</router-link></h5>
                <p class="card-text">{{produc.artikl}}</p>
                <a href="#" class="btn btn-primary" @click="deleteProduct(produc.artikl)">Удалить товар</a>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name:'listProducts',
    data(){
        return{
           vendorCode:[]
        }
    },
    computed:{
        getIdCategory(){
            return [this.$route.params.id,this.$route.params.subid]
        },
        getProducts(){
            return this.$store.getters['getProducts'].products;
        },
        filteredProducts(){
            return this.getProducts.filter((prod,index)=>{
                if(prod.category[0] == this.getIdCategory[0] && prod.category[1] == this.getIdCategory[1]){
                    this.vendorCode.push(prod.artikl)
                    return true  
                } else {
                    return false
                }
            });
            
        },
    },
    methods:{
        deleteProduct(code){
            let globalIndex ='';
            this.getProducts.forEach((element,index) => {
                if(element.artikl === code){
                    globalIndex = index
                }
            });
            this.$store.dispatch('deleteImage',this.getProducts[globalIndex].artikl)
            this.getProducts.splice(globalIndex,1)
            this.$store.dispatch('rewriteProduct', this.getProducts)
        }
    },
    components:{
    
    }
}
</script>

<style lang="less">
.list-product{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:15px;
}
</style>
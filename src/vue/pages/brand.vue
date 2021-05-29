<template>
    <form class="brand_section">
        <input id="m5" type="file" multiple="multiple">
        <input class="form-control" type="text" v-model="brand.name">
        <a @click="setBrand()">Добавить бренд</a>
    </form>
</template>

<script>
module.exports = {
    data(){
        return{
            brand:{
                img:'',
                name:'',
            },
            listBrand:[],
        }
    },
    methods:{
        setBrand(){
            this.brand.img = document.querySelector('#m5').files;
            if(this.listBrand.length === 0){
                this.listBrand[0] = this.brand;
                this.$store.dispatch('setBrand',this.listBrand)
                
            }else{
                this.listBrand.push(this.brand)
                this.$store.dispatch('setBrand',this.listBrand)
            };
            this.brand = {
                img:'',
                name:'',
            };
        }
    },
    created(){
        this.listBrand = this.$store.getters['getBrand'].brand
    },
}
</script>

<style lang="less">
.brand_section{
    .form-control{
        margin: 20px 0;
    }
    a{
        cursor: pointer;
        padding: 10px;
        border: 1px solid #000000;
        
    }
}
</style>
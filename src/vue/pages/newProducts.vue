<template>
    <form class="newproduct">
        <input id="m1" type="file" multiple="multiple">
        <input class="form-control" type="text" placeholder="название товара" v-model="product.name">
        <input class="form-control" type="text" placeholder="Уникальный код товара" v-model="product.artikl">
        <input class="form-control" type="text" placeholder="Цена в $" v-model="product.price">
        <input class="form-control" type="number" placeholder="Скидка" v-model="product.rebate">
         
        <select name="" id="" v-model="product.brand" class="form-select" v-if="brands">
            <option :value="brand.name" v-for="(brand,index) in brands" :key="index">{{brand.name}}</option>
        </select>

        <select v-model="product.category[0]" class="form-select" aria-label="Default select example">
            <option :value="index" v-for="(category,index) in getCategory" :key="index">
                {{category.name}}
            </option>
        </select>

        <select v-if="product.category.length != 0" v-model="product.category[1]" class="form-select" aria-label="Default select example">
            <option v-for="(subcategory,index) in getCategory[product.category[0]].list" :key="index" :value="index"> 
                {{subcategory.name}}
            </option>
        </select>
        
        <textarea name="editable" id="editable" cols="30" rows="10"></textarea>
        <div id="editor"></div>
        <button type="button" class="btn btn-dark" @click="addToFB()">добавить новый товар</button>
    </form>
</template>

<script>

module.exports = { 
    data(){
        return{
            listProducts:[],
            product:{
                name:'',
                price:'',
                artikl:'',
                img:'',
                brand:'',
                description:'',
                category:[],
                hit:false,
                recommend:false,
                discounts:false,
                sales:false,
                popular:false,
                available:true,
                rebate:'',
                counter:'1',
                inBasket:false,
            },
            editor:''
        }   
    },
    computed:{
        getCategory(){
            return this.$store.getters['getCategory'].category;
        },
        brands(){
            console.log(this.$store.getters['getBrand'].brand)
            return this.$store.getters['getBrand'].brand;
        }
    },
    methods:{
       
        addToFB(){
            this.product.description = this.editor.value
            this.product.img = document.getElementById('m1').files;
            if(this.listProducts.length === 0){
                if(this.product.artikl === ''){
                    return alert('Ошибка: не был указан уникальный код товара')
                } else if (this.product.category.length === 0){
                    return alert('Ошибка не была указана категория товара')
                }else{
                    this.listProducts[0] = this.product
                    this.$store.dispatch('setProduct',this.listProducts)
                }
            }else{
                if(this.product.artikl === ''){
                    return alert('Ошибка: не был указан уникальный код товара')
                } else if (this.product.category.length === 0){
                    return alert('Ошибка не была указана категория товара')
                }else{
                    this.listProducts.push(this.product);
                    this.$store.dispatch('setProduct',this.listProducts)
                }
            }

            this.product = {
                name:'',
                price:'',
                artikl:'',
                img:'',
                brand:'',
                description:'',
                category:[],
                hit:false,
                recommend:false,
                discounts:false,
                sales:false,
                popular:false,
                available:true,
                counter:'1',
                inBasket:false,
            }
            this.editor.value = '<p>Ведите описание</p>';
        }
    },
    created(){
        this.listProducts = this.$store.getters['getProducts'].products;
    },
    mounted(){
        let st = document.querySelector('#editable')
        this.editor = new Jodit(st);
        this.editor.value = '<p>Ведите описание</p>';
    }
}
</script>

<style lang="less">
.newproduct{
    .characteristics{
        padding: 15px 0;
    }
    select{
        margin: 10px 0;
    }
}
</style>
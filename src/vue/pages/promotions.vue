<template>
    <div class="promotions">
        <input id="m4" type="file" multiple="multiple">
        <input class="form-control" type="text" v-model="promotion.name">
        <textarea name="editable" id="editable" cols="30" rows="10"></textarea>
        <button @click="setPromotions()">Добавить Акцию</button>
        
    </div>
</template>

<script>
module.exports = {
    data(){
        return{
            editor:'',
            promotion:{
                img:'',
                description:'',
                name:'',
            },
            listPromotions:[],
        }
    },
    methods:{
        setPromotions(){
            this.promotion.description = this.editor.value;
            this.promotion.img = document.querySelector('#m4').files;
            if(this.listPromotions.length === 0){
                this.listPromotions[0] = this.promotion;
                this.$store.dispatch('setPromotions',this.listPromotions)
                
            }else{
                this.listPromotions.push(this.promotion)
                this.$store.dispatch('setPromotions',this.listPromotions)
            }
            this.promotion = {
                img:'',
                description:'',
                name:'',
            }
            this.editor.value = '<p>Ведите описание</p>';
        }
    },
    created(){
        this.listPromotions = this.$store.getters['getPromotions'].promotions
    },
    mounted(){ 
        let st = document.querySelector('#editable')
        this.editor = new Jodit(st);
        this.editor.value = '<p>Ведите описание</p>';
    },
}
</script>
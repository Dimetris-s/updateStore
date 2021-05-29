<template>
    <div class="gallery">
        <div class="set_gallery">
            <input type="file" id="m2">
            <input type="text" v-model="slide.name">
            <button @click="setSlider()">Добавить Фото</button>
        </div>
        <div class="slide_box">
            <div class="card" style="width: 18rem;" v-for="(slide,index) in listSlider" :key="index">
                <img :src="slide.img" class="card-img-top" alt="">
                <div class="card-body">
                    <a href="#" class="btn btn-primary" @click="deleteSlide(slide.name)">Удалить слайд</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data(){
        return{
            listSlider:[],
            slide:{
                img:'',
                name:''
            }
        }
    },
    methods:{
        setSlider(){
            this.slide.img = document.querySelector('#m2').files
            if(this.listSlider.length === 0){
                if(this.slide.name === ''){
                    return alert('ошибка не было указано имя фото')
                }else{
                    this.listSlider[0] = this.slide
                    this.$store.dispatch('setSlider', this.listSlider)    
                }
            } else{
                if(this.slide.name === ''){
                    return alert('ошибка не было указано имя фото')
                }else{
                    this.listSlider.push(this.slide)
                    this.$store.dispatch('setSlider', this.listSlider)
                }
            }
            this.slide = {
                img:'',
                name:''
            }
        },
        deleteSlide(nameSlide){
            let globalIndex ='';
            this.listSlider.forEach((element,index) => {
                if(element.name === nameSlide){
                    globalIndex = index
                }
            });
            this.$store.dispatch('deleteSlide',this.listSlider[globalIndex].name)
            this.listSlider.splice(globalIndex,1)
            this.$store.dispatch('rewriteSlider',this.listSlider)
        }
    },
    created(){
        this.listSlider = this.$store.getters['getSlider'].slider
    }
}
</script>
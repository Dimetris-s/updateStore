<template>
    <div class="gallery">
        <div class="set_gallery">
            <input type="file" id="m3">
            <input type="text" v-model="gallery.name">
            <button @click="setGallery()">Добавить Фото</button>
        </div>
        <div class="slide_box">
            <div class="card" style="width: 18rem;" v-for="(photo,index) in listGallery" :key="index">
                <img :src="photo.img" class="card-img-top" alt="">
                <div class="card-body">
                    <a class="btn btn-primary" @click="deletePhoto(index)">Удалить слайд</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data(){
        return{
            listGallery:[],
            gallery:{
                img:'',
                name:''
            }
        }
    },
    methods:{
        setGallery(){
            this.gallery.img = document.querySelector('#m3').files
            if(this.listGallery.length === 0){
                if(this.gallery.name === ''){
                    return alert('ошибка не было указано имя фото')
                }else{
                    this.listGallery[0] = this.gallery
                    this.$store.dispatch('setGallery', this.listGallery)    
                }
            } else{
                if(this.gallery.name === ''){
                    return alert('ошибка не было указано имя фото')
                }else{
                    this.listGallery.push(this.gallery)
                    this.$store.dispatch('setGallery', this.listGallery)
                }
            }
           this.gallery = {
               img:'',
               name:''
           }
        },
        deletePhoto(index){
            this.$store.dispatch('deleteGallery',this.listGallery[index].name)
            this.listGallery.splice(index,1)
            this.$store.dispatch('rewriteGallery',this.listGallery)
        }
    },
    created(){
        this.listGallery = this.$store.getters['getGallery'].gallery
        console.log(this.listGallery)
    }
}
</script>
<template>
    <article class="gallery">
        <div class="wrapper">
            <ul>
                <li v-for="(photo,index) in photo" :key="index">
                    <div class="photo" data-lightbox="roadtrip" :style="{background:'center / cover no-repeat url(' + photo.img + ') ',}"></div>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
module.exports = {
    data(){
        return{

        }
    },
    computed:{
        photo(){
            console.log(this.$store.getters['getGallery'].gallery)
            return this.$store.getters['getGallery'].gallery
        }
    }
}
</script>

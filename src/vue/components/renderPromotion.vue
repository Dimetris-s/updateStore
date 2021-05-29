<template>
   <section class="promotions">
       <div class="wrapper">
            <div class="title_promotion" >
                <h2>Акционные предложения</h2>
            </div>
            <div class="btn_promotion">
                <router-link :to="{name:'promotions'}">смотреть все акции</router-link>
            </div>
            <div class="swiper-container" v-swiper="{loop: true,
                slidesPerView:4,
                spaceBetween:30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },}">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"  v-for="(promo,index) in promotions" :key="index" :style="{background:'no-repeat url(' + promo.img + ') center/contain '}"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
       </div>
   </section>
</template>

<script>

module.exports = {
    
    data:function(){
        return {
           
        }
    },
    computed:{
        promotions(){
            return this.$store.getters['getPromotions'].promotions
        }
    },
}
</script>
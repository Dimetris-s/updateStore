<template>
    <section class="sliderContainer swiper-container" v-swiper="{loop: true,
                slidesPerView:1,
                spaceBetween:30,
        }">
        <div class="swiper-wrapper">
            <div class="slide swiper-slide" style="background-image:url('./img/CS-B023(1).jpg')"></div>
            <div class="slide swiper-slide" style="background-image:url('./img/CS-B610(1).jpg')"></div>
            <div class="slide swiper-slide" style="background-image:url('./img/M-YL830(1).jpg')"></div>
            <div class="slide swiper-slide" style="background-image:url('./img/PL-31K(1).jpg')"></div>
            <div class="slide swiper-slide" style="background-image:url('./img/VS-85(1) (1).jpg')"></div>
        </div>
    </section>
</template>

<script>
module.exports = {
    data:function(){
        return {
           
        }
    },
}

</script>

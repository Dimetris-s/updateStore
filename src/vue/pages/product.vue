<template>
    <article class="select_product">
        <div class="wrapper">
            <div class="header_product">
                <div class="left_bar">
                    <div class="product_photo">
                        <div class="image_dublicate_box swiper-container" v-swiper="{
                                slidesPerView:1,
                                
                            }">
                            <div class="image_dublicate_wrapper swiper-wrapper">
                                <div class="photo_dublicate swiper-slide"  v-for="(img,index) in product.img" :key="index">
                                    <img :src="img.url" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="image_box swiper-container" v-swiper="{
                        thumbs:{
                                    swiper:{
                                        el:'.image_dublicate_box',
                                        slidesPerView:product.img.length,
                                        direction:'vertical'
                                    }
                                }
                        }">
                            <div class="image_wrapper swiper-wrapper">
                                <div class="photo swiper-slide"  v-for="(img,index) in product.img" :key="index" :style="{background:'no-repeat url(' + img.url + ') center/contain',}">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_bar">
                    <span>{{product.price}}</span>
                    <span>{{Number.parseInt(product.price) - (Number.parseInt(product.price) * product.rebate / 100)}}</span>
                    <a @click="setToBasket(product)">купить</a>
                    
                    <div></div>
                </div>
            </div>
            <div class="footer_product">
                <div class="descrip" v-html="product.description"></div>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {
    data:function(){
        return{
        }
    },
    computed:{
        product(){
            let product = this.$store.getters['products'].products;
            return product.filter(product => product.artikl === this.selectProduct ? true : false)[0];
        },
        selectProduct(){
            console.log(this.$route.params.code)
            return this.$route.params.code;
        },
    },
    methods:{
        setToBasket(item){
            this.$store.dispatch('setBasket',item);
        }
        //:style="{background:'no-repeat url(' + img.url + ') center/contain',height:'54px'}"
    },
}
</script>
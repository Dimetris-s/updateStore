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
                                <div class="photo_image_box swiper-slide"  v-for="(img,index) in product.img" :key="index">
                                    <img :src="img.url" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_bar">
                    <h3 class="name_product">{{product.name}}</h3>
                    <div class="colum_wrap">
                        <div class="colum_left">
                            <span>{{product.price}}</span>
                            <span>{{Number.parseInt(product.price) - (Number.parseInt(product.price) * product.rebate / 100)}}</span>
                            <a @click="setToBasket(product)">купить</a>
                        </div>  
                        <div class="colum_right" >
                            <div class="accordion" :class="{'openAccordion':item.isOpenAccordion}" v-for="(item,index) in accordion" :key="index">
                                <h3 @click="toggleAccrdion(index)">{{item.title}}</h3>
                                <div class="accordion_message">
                                    <ul>
                                        <li v-for="(elemList,index) in item.description" :key="index">{{elemList}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
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
            accordion:[{
                title:'Наши Преимущества',
                isOpenAccordion:true,
                description:['Гибкая система скидок','Официальная гарантия','Официальная гарантия','Официальная гарантия'],
            },{
                title:'Наши Преимущества',
                isOpenAccordion:false,
                description:['Гибкая система скидок','Официальная гарантия','Официальная гарантия','Официальная гарантия'],
            },{
                title:'Наши Преимущества',
                isOpenAccordion:false,
                description:['Гибкая система скидок','Официальная гарантия','Официальная гарантия','Официальная гарантия'],
            }],

        }
    },
    computed:{
        product(){
            let product = this.$store.getters['products'].products;
            return product.filter(product => product.artikl === this.selectProduct ? true : false)[0];
        },
        selectProduct(){
            return this.$route.params.code;
        },
    },
    methods:{
        setToBasket(item){
            this.$store.dispatch('setBasket',item);
        },
        toggleAccrdion(id){
            this.accordion[id].isOpenAccordion = !this.accordion[id].isOpenAccordion
        }
    },
}
</script>
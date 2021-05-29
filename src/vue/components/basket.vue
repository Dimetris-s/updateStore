<template>
    <article class="modal_basket_container" :class="{'active':openBasketModal}">
        <div class="overlay" @click="closeBasket()"></div>
        <div class="modal_basket">
            <div class="title_modal_basket">
                <p>Корзина</p>
                <span class="fas fa-times" @click="closeBasket()"></span>
            </div>
            <ul>
                <li v-for="(item,index) in itemBasket" :key="index">
                    <div class="item">
                        <div class="item_img" :style="{background:'center / contain no-repeat url(' + item.img[0].url + ') ',}"></div>
                        <div class="item_description">
                            <div class="item_header">
                                <h3>{{item.name}}</h3>
                                <span class="fas fa-ban" @click="deleteItem(index)"></span>
                            </div>
                            <div class="item_footer">
                                <div class="counter">
                                    <span class="fas fa-minus" 
                                    v-show="item.counter != 1"
                                    @click="item.counter--">
                                    </span>
                                    <input v-model="item.counter">
                                    <span class="fas fa-plus" @click="item.counter++"></span>
                                </div>
                                <span>{{Number.parseInt(item.price)* Number.parseInt(item.counter) }}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="basket_footer">
                <a @click="closeBasket()">продолжить покупки</a>
                <div class="order">
                    <span>{{totalPrice}}</span>
                    <button @click="closeBasket()">
                        <router-link :to="{name:'order'}" >оформить заказ</router-link>
                    </button>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
module.exports = {
    data(){
        return{
            openBasketModal:false,
            totalBasket:'',
        }
    },
    methods:{
        openBasket(){
            this.openBasketModal = true;
        },
        closeBasket(){
            this.openBasketModal = false;
        },
        deleteItem(indexItem){
            this.itemBasket.splice(indexItem,1);
            localStorage.setItem('basket',JSON.stringify(this.itemBasket));
        },
    },
    computed:{
        itemBasket(){
            // this.totalBasket = this.$store.getters['getBaket'] 
            return this.$store.getters['getBaket'];
        },
        totalPrice(){
            let totalPrice = 0;
            this.itemBasket.forEach(element => {
                totalPrice =totalPrice + Number.parseInt(element.price)
            });
            return totalPrice
        }
    }
}
</script>
<template>
  <article>
    <div class="wrapper">
      <div class="list_promotions">
        <ul class="promotion">
          <li v-for="(promotion,index) in promotions" :key="index">
            <div class="promo">
              <div class="photo" :style="{background:'center / contain no-repeat url(' + promotion.img + ') ',}"></div>
              <p v-html="promotion.description"></p>
            </div>
          </li>
        </ul>
      </div>
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
    promotions(){

      return this.$store.getters['getPromotions'].promotions
    }
  }
}
</script>
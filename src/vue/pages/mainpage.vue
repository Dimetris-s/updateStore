<template>
    <div class="content">
        <slider />
        <product />
        <sale />
        <renderPromotion />
        <adUnit />
    </div>    
</template>

<script>
module.exports = {
    name:'mainpage',
    data:function() {
        return{}
    },
    components:{
        'slider': require('../components/slider.vue'),
        'product': require('../components/products.vue'),
        'renderPromotion': require('../components/renderPromotion.vue'),
        'sale': require('../components/saleproducts.vue'),
        'adUnit':require('../components/adUnit.vue')
    }
}
</script>
// const { default: Swiper } = require('swiper');
let Vue = require('vue');

Vue.directive('swiper',{
    componentUpdated(el,binding){
        const swiper = new Swiper(el,binding.value)
    },
    inserted:function(el,binding){
        const swiper = new Swiper(el,binding.value)
    }
})

new Vue({
    el:'#app',
    router:require('./app.router'),
    store:require('./app.store'),
    render:function(init){
        return init(require('./../../vue/index.vue'))
    }
});
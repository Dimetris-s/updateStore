const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
let routes = [
    {
        name:'mainpage',
        path:'/',
        component:require('./../../vue/pages/mainpage.vue')
    },
    {
        name:'gallery',
        path:'/gallery',
        component:require('./../../vue/pages/gallery.vue')
    },
    {
        name:'blog',
        path:'/blog',
        component:require('./../../vue/pages/blog.vue')
    },
    {
        name:'company',
        path:'/company',
        component:require('./../../vue/pages/company.vue')
    },
    {
        name:'delivery',
        path:'/delivery',
        component:require('./../../vue/pages/delivery.vue')
    },
    {
        name:'subcategory',
        path:'/subcategory&:id',
        component:require('./../../vue/pages/subcategory.vue')
    },
    {
        name:'listProducts',
        path:'/listProducts&:mainCategory&:extraCategory',
        component:require('./../../vue/pages/listProducts.vue')
    },
    {
        name:'selectProduct',
        path:'/selectProduct&:code',
        component:require('./../../vue/pages/product.vue')
    },
    {
        name:'product',
        path:'/product&:code',
        component:require('./../../vue/pages/product.vue')
    },
    {
        name:'promotions',
        path:'/promotions',
        component:require('./../../vue/pages/promotions.vue')
    },
    {
        name:'order',
        path:'/order',
        component:require('./../../vue/pages/order.vue')
    },
]

module.exports = new VueRouter ({
    mode:'history',
    routes:routes
})

/** ,*/
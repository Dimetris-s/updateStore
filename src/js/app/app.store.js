const Vue = require('vue');
const Vuex = require('vuex');
const Firebase = require('firebase/firebase');

Vue.use(Vuex);


Firebase.initializeApp({
    apiKey: "AIzaSyCoUUFVnJa633rEgD2TyBaVXd5-_OzZgt0",
    authDomain: "storeforshop-46eb2.firebaseapp.com",
    projectId: "storeforshop-46eb2",
    storageBucket: "storeforshop-46eb2.appspot.com",
    messagingSenderId: "530501494737",
    appId: "1:530501494737:web:9f81a642b09dc54801a2f0",
    measurementId: "G-7ESBSX8PFM"
})    

let db = Firebase.firestore();
let storage = Firebase.storage().ref();

module.exports = new Vuex.Store({

    state:{
        category:[],
        products:[],
        slider:[],
        gallery:[],
        promotions:[],
        brand:[],
        blog:[]
    },
    
    getters:{
        getCategory:function(state){
            return state.category;
        },
        getProducts:function(state){
            return state.products;
        },
        getSlider(state){
            return state.slider;
        },
        getGallery(state){
            return state.gallery;
        },
        getPromotions(state){
            return state.promotions;
        },
        getBlog(state){
            return state.blog;
        },
        getBrand(state){
            return state.brand;
        }
    },

    mutations:{
        getCategoty:function(state,payload){
            state.category = payload;
        },
        getProducts:function(state,payload){
            state.products = payload;
        },
        getSlider(state,payload){
            state.slider = payload;
        },
        getGallery(state,payload){
            state.gallery = payload;
        },
        getPromotions(state,payload){
            state.promotions = payload;
        },
        getBrand(state,payload){
            state.brand = payload;
        },
        getBlog(state,payload){
            state.blog = payload;
        }
    },

    actions:{
        getProducts(context){
            db.collection('products').doc('product').get()
                .then(function(response) {
                    context.commit('getProducts',response.data())
                });    
        },
        getCategory(context){
            db.collection('category').doc('category').get()
                .then(function(response) {
                    context.commit('getCategoty',response.data())
                });
        }, 
        getSlide(context){
            db.collection('slider').doc('slide').get()
                .then(function(response) {
                    context.commit('getSlider',response.data());
                });    
        },
        getGallery(context){
            db.collection('gallery').doc('gallery').get()
                .then(function(response) {
                    context.commit('getGallery',response.data());
                });   
        },
        getPromotions(context){
            db.collection('promotions').doc('promotions').get()
                .then(function(response){
                    console.log(1)
                    context.commit('getPromotions',response.data())
                });
        },
        getBrand(context){
            db.collection('brand').doc('brand').get()
                .then(function(response){
                    context.commit('getBrand',response.data())
                });
        },
        getBlog(context){
            db.collection('blog').doc('blog').get()
                .then(function(response){
                    context.commit('getBlog',response.data())
                });
        },


        rewriteProduct(context,payload){
            db.collection('products').doc('product').set({products:payload});
        },
        rewriteSlider(context,payload){
            db.collection('slider').doc('slide').set({slider:payload});
        },
        rewriteGallery(context,payload){
            db.collection('gallery').doc('gallery').set({gallery:payload});    
        },
        deleteImage:function(context,payload){
            console.log(payload);
            storage.child(`product/${payload}`).listAll().then(res =>{
                res.items.forEach((itemRef) => {
                    storage.child(`product/${payload}/${itemRef.name}`).delete().then(()=>{
                       
                        }).catch((error) => {
                            
                        });
                });              
            })
        },
        deleteSlide(context,payload){
            storage.child(`slider/${payload}/`).listAll().then(res =>{
                res.items.forEach((itemRef) => {
                    storage.child(`slider/${payload}/${itemRef.name}`).delete().then(()=>{
                        }).catch((error) => {
                            
                        });
                });              
            })
        },
        deleteGallery(context,payload){
            storage.child(`gallery/${payload}/`).listAll().then(res =>{
                res.items.forEach((itemRef) => {
                    storage.child(`gallery/${payload}/${itemRef.name}`).delete().then(()=>{
                        }).catch((error) => {
                            
                        });
                });              
            })
        },
        setSlider(context,payload){
            console.log(payload)
            let lastElement = payload.pop();
            let lastimage = lastElement.img
            for(let i = 0;i<lastimage.length;i++){
                let metadata = {
                    contentType:lastimage[i].type,
                };
                storage.child(`slider/${lastElement.name}/` +lastimage[i].name).put(lastimage[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        lastElement.img = url;
                        payload.push(lastElement);
                        if(i+1 == lastimage.length){
                            db.collection('slider').doc('slide').set({slider:payload}) 
                        }
                    })
                })
            }
        },
       
        setGallery(context,payload){
            console.log(payload)
            let lastElement = payload.pop();
            let lastimage = lastElement.img
            for(let i = 0;i<lastimage.length;i++){
                let metadata = {
                    contentType:lastimage[i].type,
                };
                storage.child(`gallery/${lastElement.name}/` +lastimage[i].name).put(lastimage[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        lastElement.img = url;
                        payload.push(lastElement);
                        if(i+1 == lastimage.length){
                            db.collection('gallery').doc('gallery').set({gallery:payload}) 
                        }
                    })
                })
            }
        },
        
        setPromotions(context,payload){
            let lastElement = payload.pop();
            let image = lastElement.img;
            for(let i = 0;i<image.length;i++){
                let metadata = {
                    contentType:image[i].type,
                };
                storage.child(`promotions/${lastElement.name}/` +image[i].name).put(image[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        lastElement.img = url;
                        if(i+1 == image.length){
                            payload.push(lastElement)
                            db.collection('promotions').doc('promotions').set({promotions:payload}) 
                        }
                    })
                })
            }
        },
        setProduct(context,payload){
            let lastElement = payload.pop();
            let image = lastElement.img;
            let imageUrl = [];
            for(let i = 0;i<image.length;i++){
                let metadata={
                    contentType:image[i].type
                }
                storage.child(`product/${lastElement.artikl}/` +image[i].name).put(image[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        imageUrl.push({url});
                        if(i+1 == image.length){
                            lastElement.img = imageUrl;
                            payload.push(lastElement)
                            db.collection('products').doc('product').set({products:payload}) 
                        }
                    })
                })
            }
        },
        setBrand(context,payload){
            console.log(payload)
            let lastElement = payload.pop();
            let image = lastElement.img;
            for(let i = 0;i<image.length;i++){
                let metadata = {
                    contentType:image[i].type,
                };
                storage.child(`brand/${lastElement.name}/` +image[i].name).put(image[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        lastElement.img = url;
                        if(i+1 == image.length){
                            payload.push(lastElement)
                            db.collection('brand').doc('brand').set({brand:payload}) 
                        }
                    })
                })
            }
        },
        setBlog(context,payload){
            let lastElement = payload.pop();
            let image = lastElement.img;
            for(let i = 0;i<image.length;i++){
                let metadata = {
                    contentType:image[i].type,
                };
                storage.child(`blog/${lastElement.name}/` +image[i].name).put(image[i],metadata).then(function(data){
                    storage.child(data.metadata.fullPath).getDownloadURL().then(function(url){
                        lastElement.img = url;
                        if(i+1 == image.length){
                            payload.push(lastElement)
                            db.collection('blog').doc('blog').set({blog:payload}) 
                        }
                    })
                })
            }
        },
    }
})
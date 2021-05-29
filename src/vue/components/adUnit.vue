<template>
  <section class="ad_unit">
      <div class="wrapper">
        <section class="center_ad_unit">
          <div class="left_ad_unit_bar">
            <router-link :to="{name:'listProducts', params:{mainCategory:'9',extraCategory:'91'}}">
              <div class="photo" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/storeforshop-46eb2.appspot.com/o/adUnit%2F%D0%93%D0%9E%D0%9B%D0%9E%D0%92%D0%AB.png?alt=media&token=bbd74d3c-1168-47e7-9aed-7ca0aab5db3c);"></div>
              
            </router-link>
          </div>
          <div class="center_ad_unit_bar">
                <div class="ad_unit_photo_up_bar">
                  <router-link :to="{name:'listProducts', params:{mainCategory:'1',extraCategory:'10'}}">
                    <div class="photo" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/storeforshop-46eb2.appspot.com/o/adUnit%2F%D0%90%D0%9A%D0%A3%D0%A1%D0%A2%D0%98%D0%9A%D0%90.png?alt=media&token=1654e00c-fd31-442e-b957-8aa14927cdaa);"></div>
                  </router-link>
                </div>
                <div class="ad_unit_photo_down_bar">
                  <router-link :to="{name:'listProducts', params:{mainCategory:'4',extraCategory:'40'}}">
                    <div class="photo" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/storeforshop-46eb2.appspot.com/o/adUnit%2FROXTONE.png?alt=media&token=8f43faf5-2ce2-4590-9a45-eeaee8e560ec);"></div>
                  </router-link>
                </div>
          </div>
          <div class="right_ad_unit_bar">
            <router-link :to="{name:'listProducts', params:{mainCategory:'8',extraCategory:'81'}}">
              <div class="photo" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/storeforshop-46eb2.appspot.com/o/adUnit%2F%D0%9C%D0%B8%D0%BA%D1%80%D0%B0%D1%84%D0%BE%D0%BD%D1%8B%20TAKSTAR.jpg?alt=media&token=82b086e7-ee3a-452a-8f13-d1d833d54b9e);"></div>
            </router-link>
          </div>
        </section>
      </div>
  </section>
</template>

<script>
module.exports ={
  data(){
    return{

    }
  }
}
</script>
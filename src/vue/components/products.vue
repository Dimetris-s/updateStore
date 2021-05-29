<template>
   <section class="oldProducts">
       <div class="wrapper">
            <div class="titleOldProducts">
                <h2>Горячие предложения</h2>
            </div>
            <div class="Navigation">
                <button>популярное</button>
                <button style="margin: 0 15px">хиты продаж</button>
                <button>рекомендуем</button>
            </div>
            <div class="caruselCard">
                <div class="card">
                    <div class="card-wrapper">
                    <div class="photo" style="background-image:url('./img/CS-B023(1).jpg')"></div>
                        <h3 class="productName">CS-203 LT</h3>
                        <p class="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit adipisci corrupti porro quaerat autem voluptatem deserunt sed illum. 
                            Fugit ab adipisci expedita iusto voluptas placeat quasi sint itaque magnam architecto.</p>
                        <div class="price">
                            <p>3,783 ₴</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <!-- <img src="./img/CS-B610(1).jpg" alt=""> -->
                    <div class="card-wrapper">
                    <div class="photo" style="background-image:url('./img/CS-B610(1).jpg')"></div>
                        <h3 class="productName">CS-203 LT</h3>
                        <p class="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit adipisci corrupti porro quaerat autem voluptatem deserunt sed illum. 
                            Fugit ab adipisci expedita iusto voluptas placeat quasi sint itaque magnam architecto.</p>
                        <div class="price">
                            <p>3,783 ₴</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <!-- <img src="./img/M-YL830(1).jpg" alt=""> -->
                    <div class="card-wrapper">
                    <div class="photo" style="background-image:url('./img/M-YL830(1).jpg')"></div>
                        <h3 class="productName">CS-203 LT</h3>
                        <p class="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit adipisci corrupti porro quaerat autem voluptatem deserunt sed illum. 
                            Fugit ab adipisci expedita iusto voluptas placeat quasi sint itaque magnam architecto.</p>
                        <div class="price">
                            <p>3,783 ₴</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <!-- <img src="./img/PL-31K(1).jpg" alt=""> -->
                    <div class="card-wrapper">
                    <div class="photo" style="background-image:url('./img/PL-31K(1).jpg"></div>
                        <h3 class="productName">CS-203 LT</h3>
                        <p class="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit adipisci corrupti porro quaerat autem voluptatem deserunt sed illum. 
                            Fugit ab adipisci expedita iusto voluptas placeat quasi sint itaque magnam architecto.</p>
                        <div class="price">
                            <p>3,783 ₴</p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <!-- <img src="./img/VS-85(1) (1).jpg" alt=""> -->
                    <div class="card-wrapper">
                    <div class="photo" style="background-image:url('./img/VS-85(1) (1).jpg')"></div>
                        <h3 class="productName">CS-203 LT</h3>
                        <p class="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Odit adipisci corrupti porro quaerat autem voluptatem deserunt sed illum. 
                            Fugit ab adipisci expedita iusto voluptas placeat quasi sint itaque magnam architecto.</p>
                        <div class="price">
                            <p>3,783 ₴</p>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   </section>
</template>

<script>
module.exports = {
    data:function(){
        return {
           
        }
    },
     mounted:function(){
        $('.caruselCard').slick({
           slidesToShow: 4,
        })
    }
}
</script>
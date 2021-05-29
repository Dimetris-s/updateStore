<template>
    <article class="order_form">
        <div class="wrapper">
            <h3>Оформление заказа</h3>
            <form action="">
                <div class="row g-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Введите ваше имя" aria-label="First name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Введите вашу фамилию" aria-label="Last name">
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Введите ваш номер телефона" aria-label="phone">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Введите ваш email" aria-label="email">
                    </div>
                </div>
            </form>
        </div>
    </article>
</template>

<script>
module.exports ={
    data(){
        return{
            
        }
    }
}
</script>
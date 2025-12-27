<template>
    <div class="contacts-information">
        <div class="contacts-inner">
            <div>
                <span class="contact-title">КОНТАКТЫ</span>
                
                <div class="contact-link-wrapper">
                    <a class="contact-link" href="tel:+998(90)123-45-67">+998(90)123-45-67</a>
                    <a class="contact-link" href="mailto:info@trend-shop.usa">info@trend-shop.uz</a>
                </div>
            </div>
            <div>
                <span class="contact-title">АДРЕС</span>

                <a class="contact-link" href="#!">г. Ташкент, <br> Навои пр-т, д. 45</a>
            </div>
        </div>
        <div class="subscribe">
            <p>Подпишитесь на нашу расслыку и <br> вы первыми узнаете о скидках и акциях</p>
            <form class="subscribe-form">
                <input type="text" name="email" id="email" placeholder="Введите ваш email">
                <button type="submit">Подписаться</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .contacts-information{
        display: flex;
        flex-direction: column;
        gap: 26px;
    }

    .contacts-inner{
        display: flex;
        gap: 82px;
    }

    .contact-title{
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        margin-bottom: 15px;
        color: var(--color-dark);
        display: block;
    }

    .contact-link{
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: var(--color-dark);
    }

    .contact-link-wrapper{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .subscribe{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .subscribe p{
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
    }

    .subscribe-form{
        display: flex;
    }

    .subscribe-form input{
        padding: 12px 20px;
        border: 1px solid var(--color-accent);
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: var(--color-dark);
        height: 40px;
        font-family: "Mulish", sans-serif;
    }

    .subscribe-form button{
        height: 40px;
        padding: 12px 39px;
        background-color: var(--color-accent);
        color: var(--color-white);
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
        border: 0;
    }
</style>
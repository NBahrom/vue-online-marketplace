
<template>
    <div class="footer-subscribe">
        <div class="container">
            <div class="footer-subscribe-inner">
                <h2>Оповещения о выгодных акциях </h2>

                <div class="socials">
                    <a href="#!">
                        <FacebookIcon />
                    </a>
                    <a href="#!">
                        <TelegramIcon />
                    </a>
                    <a href="#!">
                        <InstagramIcon />
                    </a>
                </div>

                <p>Подписывайтесь на нас и оставайтесь <br>
                    в курсе всех наших предложений</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import FacebookIcon from '../icons/FacebookIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
import TelegramIcon from '../icons/TelegramIcon.vue';
</script>


<style scoped>
    .footer-subscribe-inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer-subscribe-inner h2{
        font-weight: 700;
        font-size: 40px;
        line-height: 100%;
        text-align: center;
        margin-bottom: 40px;
    }

    .socials{
        display: flex;
        gap: 80px;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .socials a{
        max-width: 40px;
        max-height: 40px;
    }

    .footer-subscribe-inner p{
        font-weight: 500;
        font-size: 22px;
        line-height: 100%;
        text-align: center;
    }
</style>

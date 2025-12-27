
<template>
    <FooterSubscribe />
    <footer>
        <div class="container">
            <div class="footer-inner">
                <FooterList
                    v-if="listCatalog"
                    list-title="КАТАЛОГ"
                    :lists="listCatalog?.list"
                />

                <FooterList
                    v-if="listRub"
                    list-title="РУБРИКАТОР"
                    :lists="listRub.list"
                />

                <FooterList
                    v-if="listInfo"
                    list-title="ИНФОРМАЦИЯ"
                    :lists="listInfo.list"
                >
                    <div class="cards">
                        <span>Мы принимаем</span>
                        
                        <div class="cards-img">
                            <img :src="CardsImg" alt="cards">
                        </div>
                    </div>
                </FooterList>

                <FooterContacts />
            </div>

            <p class="rights">2022 © ООО «UZB» - интернет магазин</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import FooterContacts from './FooterContacts.vue';
import FooterList from './FooterList.vue';
import FooterSubscribe from './FooterSubscribe.vue';
import categories from '@/data/categories.json'
import CardsImg from '@/assets/images/cards.png'

const listCatalog = categories.find(list => list.name == 'Catalog')
const listRub = categories.find(list => list.name == 'Rub')
const listInfo = categories.find(list => list.name == 'Info')
</script>

<style scoped>
    footer{
        width: 100%;
        padding-top: 40px;
        padding-bottom: 10px;
        background-color: var(--color-grey);
        margin-top: 50px;
    }
    
    .footer-inner{
        display: flex;
        justify-content: space-between;
    }

    .rights{
        margin-top: 45px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: var(--color-light-blue);
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cards span{
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
    }

    .cards-img{
        width: 114px;
        height: 45px;
    }

    .cards-img img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
<template>
        <div class="header_bottom">
            <button className="catalogBtn">
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="3" fill="white"/>
                <rect y="5" width="20" height="3" fill="white"/>
                <rect y="10" width="20" height="3" fill="white"/>
                </svg>  
                Каталог
            </button>

            <ul className="navList">
                <li><a href="#!">Стиральные машины</a></li>
                <li><a href="#!">Кондиционеры</a></li>
                <li><a href="#!">Пылесосы</a></li>
                <li><a href="#!">Смартфоны</a></li>
                <li><a href="#!">Ноутбуки</a></li>
                <li><a href="#!">Телевизоры</a></li>
                <li><a href="#!">Все для спорта</a></li>
            </ul>
        </div>
</template>


<style>
    .header_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

        
    .navList{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        padding-left: 30px ;
        flex-wrap: nowrap;
    }

    .navList li a{
        font-size: 22px;
        font-weight: 500;
        line-height: 22px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #000;
        width: max-content;
        display: block;
    }

    .navList li a:hover{
        color: #00000075;
    }

    .catalogBtn{
        padding: 17px 31px;
        display: flex;
        justify-content: center;
        align-items: center; 
        gap:  12px ;
        font-size: 18px;
        font-weight: 400;
        line-height: 18px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        background: linear-gradient(86.95deg, #C240F5 31.32%, #FA9E0E 73.28%);
        border: 0;
        border-radius: 6px;
        color: #fff;
    }
</style>
<template>
        <div class="header_top">
            <div className="logo">
                <img alt="Vue logo" src="../../assets/images/logo.svg" />
            </div>

            <form className="form">
                <input className="search" type="text" name="search" placeholder="Поиск по наименованию или артикулу" />
                <button className="submit" type="submit">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 19L14.4435 14.4435M14.4435 14.4435C15.8686 13.0184 16.75 11.0496 16.75 8.875C16.75 4.52576 13.2242 1 8.875 1C4.52576 1 1 4.52576 1 8.875C1 13.2242 4.52576 16.75 8.875 16.75C11.0496 16.75 13.0184 15.8686 14.4435 14.4435Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>

</template>


<style>
.header_top{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

    .logo{
    width: 129px;
    height: 59px;
}

.logo img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.form{
    position: relative;
    max-width: 693px;
    width: 100%;
}

.search{
    max-width: 693px;
    width: 100%;
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid #FBC100;
    padding: 16px 20px;
    padding-right: 60px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #000000;
}

.submit{
    padding: 16.9px 21px;
    background-color: #FBC100;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
}

.submit svg{
    width: 18px;
    height: 18px;
}


</style>
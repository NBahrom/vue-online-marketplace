<template>
    <div class="category-card">
        <div class="category-card-inner">
            <div class="category-content">
                <h3 class="category-name">{{ categoryName }}</h3>

                <a :href="categoryLink" class="category-button" :style="buttonStyles">Подробнее</a>
            </div>
            <div class="category-image">
                <img :src="categoryImage" :alt="categoryName" />
            </div>
        </div>
        <p class="category-text">{{ categoryText }}</p>
    </div>
</template>


<script>
export default {
    name: 'SingleCategoriy',
    props: {
        categoryName: {
            type: String,
            required: true
        },
        categoryImage: {
            type: String,
            required: true
        },
        categoryLink: {
            type: String,
            required: true
        },
        categoryText: {
            type: String,
            required: true,
        },
        categoryBtnColor: {
            type: String,
            required: false,
            default: '#ffffff'
        },
        categoryBgColor: {
            type: String,
            required: false,
            default: '#f8f9fa'
        },
        categoriyTextColor: {
            type: String,
            required: false,
            default: '#ffffff'
        },
        textPosition: {
            type: String,
            required: false,
            default: '-50%, 0%'
        },
        imgPosition: {
            type: String,
            required: false,
            default: '-50%, -20%'
        }
    },
    computed: {
        buttonStyles() {
            const isDark = this.categoryBtnColor === 'dark';

            return {
                backgroundColor: isDark ? '#1B1B1B' : '#ffffff',
                color: isDark ? '#ffffff' : '#000000'
            };
        }
    }

};
</script>


<style scoped>
.category-card {
    background-color: v-bind(categoryBgColor);
    border-radius: 30px;
    padding: 60px 30px;
    overflow: hidden;
    position: relative;
}

.category-card-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    height: 290px;
}

.category-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 50%;
}

.category-name {
    font-size: 1.5rem;
    font-weight: bold;
    color: v-bind(categoriyTextColor);
    line-height: 1.2;
    text-transform: uppercase;
}

.category-button {
    padding: 6px 18px;
    border-radius: 30px;
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    width: fit-content;
}

.category-image{
    width: 350px;
    min-width: fit-content;
    height: 350px;
    position: relative;
    right: -60%;
    transform: translate(v-bind(imgPosition));
}

.category-image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.category-text {
    font-weight: 400;
    font-size: 58px;
    color: v-bind(categoriyTextColor);
    opacity: 0.3;
    text-transform: uppercase;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(v-bind(textPosition));
}

.category-card:last-of-type .category-text,
.category-card:first-of-type .category-text{
    left: unset;
    transform: unset;
}
</style>
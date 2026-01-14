
<template>
    <div class="counter">
        <button @click="decrease" class="action-btn" type="button">
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="1.71429" fill="#5D6C7B"/>
            </svg>
        </button>

        <div>
            <input :name="name" :id="name" :value="count" class="hide" type="number" readonly>
            <span class="counter-int">1</span>
        </div>

        <button @click="increase" class="action-btn" type="button">
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="1.71429" fill="#5D6C7B"/>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface CounterProps {
        name?: string
        min?: number
        max?: number
        step?: number
    }
    const props = defineProps<CounterProps>()

    const count = ref(props.min || 0)

    const increase = () => {
        if(props.max && count.value >= props.max){
            return count.value++
        }
        return count.value++
    }

    const decrease = () => {
        if(count.value > (props.min || 0)){
            count.value--
        }
    }
</script>

<style scoped>
    .counter{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        padding: 7px 16px;
        background-color: #F4F7FB;
        border-radius: 5px;
    }

    .action-btn{
        width: 12px;
        height: 12px;
    }

    .action-btn svg rect{ 
        fill: #5D6C7B;
    }

    .counter-int{
        font-size: 18px;
        line-height: 100%;
        font-weight: 400;
    }    
</style>
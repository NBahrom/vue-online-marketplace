<template>
    <div class="list-outer-block">
        <div class="list-container">
          <span>{{ listTitle }}</span>
      
          <div class="list">
            <a
              v-for="(item, index) in lists"
              :key="index"
              :href="item.link"
              :class="{ bold: isTextBold }"
            >
              {{ item.text }}
            </a>
          </div>
        </div>
        <slot />
    </div>
</template>


<script setup lang="ts">
interface ListItem {
  text: string
  link: string
}

const props = defineProps<{
  listTitle: string
  isTextBold?: boolean
  lists: ListItem[]
}>()
</script>


<style scoped>
    .list-container{
        display: flex;
        flex-direction: column;
        max-width: 278px;
    }

    .list-container > span{
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;
        color: var(--color-dark);
        margin-bottom: 20px;
    }

    .list{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .list a{
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        color: var(--color-dark);
    }

    .list a.bold{
        font-weight: 600;
    }

    .list-outer-block{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
</style>
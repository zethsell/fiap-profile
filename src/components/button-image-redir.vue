<script setup lang="ts">
interface Props {
  title: string
  image: string
  url: string
}

const props = defineProps<Props>()

</script>

<template>
  <a class="w-[350px] bg-white px-4 py-2 rounded-md border-2 border-gray-300 flex justify-between hover:cursor-pointer hover:shadow-md"
     target="_blank"
     :href="props.url">
    <span class="flex gap-3">
    <icon :icon="props.image" class="!h-[24px] !w-[24px] text-red-950"/>
      {{ props.title }}
    </span>
    <icon icon="mdiChevronRight" class="!h-[24px] text-gray-400"/>
  </a>
</template>

<style scoped>
</style>
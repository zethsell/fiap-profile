<script setup lang="ts">

type Data = {
  url: string, title: string, icon: string
}

const data: Array<Data> = [
  {url: "https://wa.me/14996459666", title: "Whatsapp", icon: "mdiWhatsapp"},
  {url: "https://www.linkedin.com/in/marcio-theodoro-rodrigues-1727a2151/", title: "LinkedIn", icon: "mdiLinkedin"},
  {url: "https://github.com/zethsell", title: "GitHub", icon: "mdiGithub"},
  {url: "https://www.instagram.com/marcio.trodrigues/", title: "Instagram", icon: "mdiInstagram"},
]
</script>

<template>
  <main class="flex w-full justify-center flex-col items-center gap-1 my-4">
    <profile-image/>
    <div class="flex flex-col items-center mb-3">
      <h1 class="font-semibold text-teal-800">Marcio Theodoro Rodrigues</h1>
      <h4 class="text-sm text-gray-400">@zethsell</h4>
    </div>
    <h4 class="font-semibold">Backend Developer Laravel/PHP || NodeJs</h4>
    <div class="flex-col flex  gap-3 my-5">
      <button-image-redir
          v-for="(item, index) in data" :key="index"
          :url="item.url"
          :image="item.icon"
          :title="item.title"
      />
    </div>
  </main>
</template>

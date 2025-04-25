<template>
  <div class="container">
    <NuxtLayout class="flex justify-center items-center flex-col w-[130rem]">
      <Carousel :data />
    </NuxtLayout>
  </div>
</template>

<script setup>

import data from './store/index.js'
  
</script>

<template>
  <div id="app" class="container">
      <Header :articlesUrl />
        <Carousel :data />
      <Footer :articlesUrl />
  </div>
</template>

<script lang="ts" setup>

import { data, articlesUrl } from './store/index'
  
</script>

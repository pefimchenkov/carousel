<template>

<div class="main">

  <div
    @click="stepBack"
    class="slider-handler-left">
    <Icon
      name="material-symbols:arrow-back-ios-new-rounded"
      class="slider-icon"
    />
  </div>

    <div
      class="embla slider"
      ref="emblaRef">

      <div class="slider-container">
        <div
          v-for="item in data"
          class="slider-card"
          @click="gotoArticle(item.url)"
        >
            <div class="slider-card-img-container">
                <img
                  class="slider-card-img"
                  :src="item.img"
                />
            </div>
            <h3 class="slider-card-title">{{ item.title }}</h3>
            <p class="slider-card-desc">{{ formatDesc(item.desc) }}</p>

        </div>
      </div>

    </div>

    <div
      @click="stepForward"
      class="slider-handler-right">
      <Icon
        name="material-symbols:arrow-forward-ios-rounded"
        class="slider-icon"
      />
    </div>

</div>

</template>


<script lang="ts" setup>

  import { EmblaOptionsType } from 'embla-carousel'
  import emblaCarouselVue from 'embla-carousel-vue';

  const { data } = defineProps(['data']);

  const options: EmblaOptionsType = {
    loop: true,
    align: 'start'
}

  const [emblaRef, emblaApi] = emblaCarouselVue(options);

  function stepForward(): void {
    emblaApi.value?.scrollNext();
  }

  function stepBack(): void {
    emblaApi.value?.scrollPrev();    
  }

  function formatDesc(params: string): string {
    return params?.length > 80 ?  params.slice(0, 80) + '... ' : params;
  }

  function gotoArticle(url: string): void {
    window.alert(url);
  }
  

</script>

<template>

<div class="flex flex-row justify-between items-center w-[126rem] cursor-pointer">

  <div @click="stepBack" class="text-4xl w-16 flex justify-start">
    <Icon name="material-symbols:arrow-back-ios-new-rounded" class="text-teal-800" />
  </div>

    <div class="embla w-full border rounded-lg overflow-hidden" ref="emblaRef">
      <div class="flex flex-row justify-between p-5 gap-4">
        <div
          v-for="item in data"
          class="rounded-2xl border h-[470px] min-w-[375px] flex flex-col justify-between items-center"
        >
            <div class="mb-4 w-full h-[220px]">
                <img class="rounded-t-2xl w-full h-full" :src="item.img" />
            </div>
            <h3 class="mb-2 text-[2rem] font-bold text-teal-800 p-5">{{ item.title }}</h3>
            <p class="text-gray-400 text-[1.7rem] p-5">{{ formatDesc(item.desc) }}</p>

        </div>
      </div>
    </div>

    <div @click="stepForward" class="text-4xl w-16 flex justify-end cursor-pointer">
      <Icon name="material-symbols:arrow-forward-ios-rounded" class="text-teal-800" />
    </div>

</div>

</template>


<script setup>

  import { onMounted } from 'vue';
  import emblaCarouselVue from 'embla-carousel-vue';
  import Autoplay from 'embla-carousel-autoplay';

  const { data } = defineProps(['data'])

  const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true }, [Autoplay({ delay: 8000 })]);

  onMounted(() => {
    if (emblaApi.value) {
      console.log(emblaApi.value.slideNodes());
    }
  })


  function stepForward() {
    return emblaApi.value.scrollNext();
  }

  function stepBack() {
    return emblaApi.value.scrollPrev();    
  }

  function formatDesc(params) {
    return params?.length > 100 ?  params.slice(0, 100) + '... ' : params
  }

  

</script>

<style scoped>

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }

</style>
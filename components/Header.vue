<template>
    <div class="header">
        <div class="header-title">
            Статьи о путешествиях
        </div>
        <NuxtLink
            :to="articlesUrl"
            target="_blank" class="header-all-articles">
            Все статьи
            &nbsp;
            <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                class="header-icons text-sm"
            />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>

const { articlesUrl } = defineProps<{
    articlesUrl: string
}>();

</script>

<style>

</style>

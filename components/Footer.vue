<template>
    <span class="footer">
        <NuxtLink
            :to="articlesUrl"
            target="_blank"
            class="footer-all-articles">
                Все статьи &nbsp;
            <Icon
                name="material-symbols:arrow-forward-ios-rounded"
                class="icon"
                style="position: relative; top: 1px"
            />
        </NuxtLink>
    </span>
</template>

<script lang="ts" setup>

const { articlesUrl } = defineProps<{
    articlesUrl: string
}>();

</script>

<style>
</style>

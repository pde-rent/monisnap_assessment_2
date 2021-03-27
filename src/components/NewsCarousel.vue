<template lang="pug">

.news-carousel.flex-horizontal.y-center.x-center
.cards(v-for="news in newsList")
  NewsCard(:news="news")

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import {News} from "../model/entities/News";
    import NewsCard from "./NewsCard.vue";

    export default defineComponent({
        name: 'NewsCarousel',
        components: {
            NewsCard
        },
        props: {
            newsList: {
                type: Object as () => News[],
                required: true
            }
        },
        setup: () => {
            return {}
        }
    });

</script>

<style scoped lang="scss">
</style>

<template lang="pug">

.news.card.flex-vertical.y-center.x-center
  .icon.material-icons {{ news.iconName }}
  .title
  .body
  a(class="link" :href="news.linkPath") {{ news.linkText }}

</template>

<script lang="ts">

import { ref, defineComponent } from 'vue'
import {News} from "../model/entities/News";

export default defineComponent({
  name: 'NewsCard',
  props: {
    news: {
      type: Object as () => News,
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

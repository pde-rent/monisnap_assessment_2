<template lang="pug">

.footer.flex-horizontal.x-center.y-center
  .logo(v-html="Svg.logoFull")
  .text {{text}}

</template>

<script lang="ts">

import { ref, defineComponent } from 'vue'
import {Svg} from "../constants";

export default defineComponent({
  name: 'Footer',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup: () => {
    return {Svg}
  }
});

</script>

<style scoped lang="scss">é
</style>

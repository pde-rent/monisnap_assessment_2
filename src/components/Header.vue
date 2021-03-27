<template lang="pug">

//:class="autoFlexClass()"
.header.flex-horizontal.x-center.y-center
  .logo(v-html="Svg.logoFull")

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import {Svg} from "../constants";

    export default defineComponent({
        name: 'Header',
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

<style scoped lang="scss">
</style>

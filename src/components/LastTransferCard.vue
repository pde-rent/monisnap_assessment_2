<template lang="pug">

.last-transfer.card.flex.x-center
  TransferCard(:transfer="transfer")
  .controls
    button.send-again Send Again

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import {getFloat, getInt, Transfer} from "../model/entities/Transfer";
    import TransferCard from "./TransferCard.vue";

    export default defineComponent({
        name: 'LastTransferCard',
        components: { TransferCard },
        props: {
            transfer: {
                type: Object as () => Transfer,
                required: true
            }
        },
        setup: (props) => {}
    });

</script>

<style scoped lang="scss">
</style>

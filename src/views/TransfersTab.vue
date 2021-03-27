<template lang="pug">

.transfers.tab.flex-vertical.x-center.y-start
  .cards(v-for="transfer in transfers")
    TransferCard(:transfer="transfer")
  .link.load-more See more

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import TransferCard from "../components/TransferCard.vue";
    import {Transfer} from "../model/entities/Transfer";
    import {ViewState} from "../model/entities/ViewState";
    import {State} from "../constants";

    export default defineComponent({
        name: 'Transfers',
        components: {
            TransferCard,
        },
        props: {
            // passed from main app state (ideally vuex)
            transfers: {
                type: Object as () => Transfer[],
                required: true
            }
        },
        setup: () => {
            // TODO: use auto component name resolution with APP_TABS
            // to genericize this
            State.VIEW = ViewState.TRANSFERS;
            return {}
        }
    });

</script>

<style scoped lang="scss">
</style>

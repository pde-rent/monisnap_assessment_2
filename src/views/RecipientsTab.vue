<template lang="pug">

.recipients.tab.flex-horizontal.y-start.x-center
  .cards(v-for="transfer in transfers")
    RecipientCard(:recipient="recipient")
  // TODO: implement the placeholder

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import RecipientCard from "../components/RecipientCard.vue";
    import {User} from "../model/entities/User";
    import {State} from "../constants";
    import {ViewState} from "../model/entities/ViewState";

    export default defineComponent({
        name: 'Recipients',
        components: {
            RecipientCard,
        },
        props: {
            // passed from main app state (ideally vuex)
            recipients: {
                type: Object as () => User[],
                required: true
            }
        },
        setup: () => {
            // TODO: use auto component name resolution with APP_TABS
            // to genericize this
            State.VIEW = ViewState.RECIPIENTS;
            return {}
        }
    });

</script>

<style scoped lang="scss">
</style>

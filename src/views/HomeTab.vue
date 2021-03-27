<template lang="pug">

.home(class="autoFlexClass()").tab.x-center.y-start

  .flex-vertical.x-center.y-start
    .title My last transfer
    LastTransferCard(:transfer="lastTransfer")
    a(class="link" :href="transfersPath") See all transfers


  .flex-vertical.x-center.y-start
    .title My favorite recipient
    FavoriteRecipientCard(:recipient="favoriteRecipient")
    a(class="link" :href="recipientsPath") See all recipients

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import LastTransferCard from "../components/LastTransferCard.vue";
    import FavoriteRecipientCard from "../components/FavoriteRecipientCard.vue";
    import {Transfer} from "../model/entities/Transfer";
    import {User} from "../model/entities/User";
    import {Server, State} from "../constants";
    import {ViewState} from "../model/entities/ViewState";

    // TODO: do not hardcode this, use the router routes
    const transfersPath = Server.STATIC_ROOT + "/transfers";
    const recipientsPath = Server.STATIC_ROOT + "/recipients";

    export default defineComponent({
        name: 'Home',
        components: {
            LastTransferCard,
            FavoriteRecipientCard
        },
        props: {
            lastTransfer: {
                type: Object as () => Transfer,
                required: true
            },
            favoriteRecipient: {
                type: Object as () => User,
                required: true
            }
        },
        setup: () => {
            // TODO: use auto component name resolution with APP_TABS
            // to genericize this
            State.VIEW = ViewState.HOME;
            return {transfersPath, recipientsPath}
        }
    });

</script>

<style scoped lang="scss">
</style>

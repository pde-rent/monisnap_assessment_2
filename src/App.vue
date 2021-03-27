<template lang="pug">

// header has no props >> only logo
Header

template(v-if="rState.VIEW===ViewState.HOME")
  NewsCarousel(:newsList="newsList")

.tabs
  .headers.flex-horizontal.y-center.x-start
    template(v-for="tabName in APP_TAB_LIST")
      .tab-header(:class="{active: rState.VIEW===tabName}")
  .body
    // TODO: make this generic by injecting APP_TABS[rState.VIEW].component here
    template(v-if="rState.VIEW===ViewState.HOME")
      HomeTab(:lastTransfer="lastTransfer" :favoriteRecipient="favoriteRecipient")
    template(v-else="rState.VIEW===ViewState.TRANSFERS")
      TransfersTab(:transfers="transfers")
    template(v-else="rState.VIEW===ViewState.RECIPIENTS")
      RecipientsTab(:recipients="recipients")

    // we can switch to lazy loading using vue router and smth such as below
      router-link(to='/') Home
        router-link(to='/transfers') Transfers
        router-link(to='/recipients') Recipients
      router-view

// footer has a text prop unlike the header
Footer(text="Made with ❤️in Paris")

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import HomeTab from "./views/HomeTab.vue";
    import RecipientsTab from "./views/RecipientsTab.vue";
    import TransfersTab from "./views/TransfersTab.vue";
    import NewsCarousel from "./components/NewsCarousel.vue";
    import {APP_TAB_LIST, APP_TABS, State} from "./constants";
    import {DAO} from "./model/Dao";
    import {ViewState} from "./model/entities/ViewState";
    import Header from "./components/Header.vue";
    import Footer from "./components/Footer.vue";

    // not const as changes with the app state
    // every action from ActionEmitter (i.e. make new transfer)
    // will change these entities states
    let transfers = DAO.getTransfers();
    let recipients = DAO.getRecipients();
    let newsList = DAO.getNews();
    if (transfers && transfers.length) {
        transfers = transfers
            .sort((t1, t2) => t1.sendDate > t2.sendDate ? 1 : 0);
    }
    let transferCountByRecipientUid: {[key: string]: number} = {};
    let lastTransfer = transfers[0];
    let maxTransfers = 0;
    let favoriteRecipientUid = "";
    transfers.forEach(t => {
        if (!(t.recipientUid in transferCountByRecipientUid)) {
            transferCountByRecipientUid[t.recipientUid] = 0;
        } else {
            transferCountByRecipientUid[t.recipientUid]++;
        }
        if (transferCountByRecipientUid[t.recipientUid] > maxTransfers) {
            maxTransfers = transferCountByRecipientUid[t.recipientUid];
            favoriteRecipientUid = t.recipientUid;
        }
    });
    let favoriteRecipient = DAO.getUser(favoriteRecipientUid);

    export default defineComponent({
        name: 'App',
        components: {
            Header,
            Footer,
            NewsCarousel,
            HomeTab,
            RecipientsTab,
            TransfersTab,
        },
        props: {},
        setup: () => {
            let rState = ref(State);
            // TODO: make these reactive()
            return {
                recipients,
                transferCountByRecipientUid,
                lastTransfer,
                maxTransfers,
                favoriteRecipientUid,
                newsList,
                ViewState,
                APP_TABS,
                APP_TAB_LIST,
                rState}
        }
    });

</script>

<style scoped lang="scss">
</style>

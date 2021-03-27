<template lang="pug">

.transfer.card.flex-horizontal.y-center
  .pic
    .main: img(:src="DAO.getUserAvatarPic(recipient)")
    .flag: img(:src="DAO.getUserCountryPic(recipient)")
  .fex-vertical.center-y.main-caption
    .name {{recipient.displayName}}
    .amount
      .integer {{ getInt(transfer) }}
      .floating {{ getFloat(transfer) }}
      .currency {{ transfer.currency }}
  .fex-vertical.center-y.secondary-caption
    .status {{ StatusMessage[transfer.status] }}
    .date {{ dateToStringFr(transfer.sendDate) }}

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import {DAO} from "../model/Dao";
    import {getFloat, getInt, Transfer, StatusMessage} from "../model/entities/Transfer";
    import { User } from '../model/entities/User';
    import {dateToStringFr} from "../scripts/utils";

    export default defineComponent({
        name: 'TransferCard',
        props: {
            transfer: {
                type: Object as () => Transfer,
                required: true
            }
        },
        setup: (props) => {
            const recipient: User = DAO.getUser(props.transfer.recipientUid);
            return {DAO, recipient, getFloat, getInt, StatusMessage, dateToStringFr}
        }
    });

</script>

<style scoped lang="scss">
</style>

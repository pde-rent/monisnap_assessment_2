<template lang="pug">

.fav-recipient.card.flex-horizontal.y-center
  .pic
    .main: img(:src="DAO.getUserAvatarPic(recipient)")
    .flag: img(:src="DAO.getUserCountryPic(recipient)")
  .name {{recipient.displayName}}
  .count {{DAO.getTransferCount(recipient.uid)}} transfers

</template>

<script lang="ts">

    import { ref, defineComponent } from 'vue'
    import {User} from "../model/entities/User";
    import {DAO} from "../model/Dao";

    export default defineComponent({
        name: 'RecipientCard',
        props: {
            recipient: {
                type: Object as () => User,
                required: true
            }
        },
        setup: () => {
            return {DAO}
        }
    });

</script>

<style scoped lang="scss">
</style>


// super simplified
import {DAO, Dao} from "../Dao";

export interface User {
    uid: string, // could be a phone number
    accountUid: string, // refers to Account
    avatarPath?: string,
    firstName?: string,
    lastName?: string,
    displayName: string, // i.e. Maman
    favoriteRecipientUid?: string,
    favoriteRecipientTransferCount?: number,
    // ...
    countryAlpha2: string // alpha3, refers to Country
}

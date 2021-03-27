// import ApiWrapper, {API_WRAPPER} from "";

import {State} from "../constants";
import {Transfer, TransferStatus} from "../model/entities/Transfer";
import {generateUid} from "../scripts/utils";

export async function postTransfer(to: string, amount: number, sendDate: Date = new Date()): Promise<Transfer> {

    const t: Transfer = {
        uid: generateUid(), // this uid should be generated back-end of course
        amount,
        senderUid: State.USER.uid,
        recipientUid: to,
        sendDate,
        status: TransferStatus.PENDING
    };
    // ... send to API
    return Promise.resolve(t); // or wait for api response
}

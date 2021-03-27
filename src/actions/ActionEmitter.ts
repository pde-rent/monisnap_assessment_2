// import ApiWrapper, {API_WRAPPER} from "";

import {State} from "../constants";
import {Transfer, TransferStatus} from "../model/entities/Transfer";
import {postTransfer} from "../actions/post-transfer";

export default class ActionEmitter {

    // private aw: ApiWrapper = API_WRAPPER;

    public transfer = postTransfer;
}

// default emitter singleton
export const ACTION_EMITTER = new ActionEmitter();


export enum TransferStatus {
    PENDING = 0,
    PROCESSING = 1,
    FAILED = 2,
    PROCESSED = 3
}

export const StatusMessage: {[key: number]: string} = {
    [TransferStatus.PENDING]: "En attente",
    [TransferStatus.PROCESSING]: "En cours d'envoi",
    [TransferStatus.FAILED]: "Envoi echoué",
    [TransferStatus.PROCESSED]: "Envoi effectué",
};

// super simplified
export interface Transfer {
    uid?: string, // unknown until confirmation from back
    amount: number,
    currency: string,
    senderUid: string, // refers to User, could abstract to Account
    recipientUid: string, // refers to User, could abstract to Account
    sendDate: Date,
    receiptDate?: Date, // unknown at send time >> optional
    status: TransferStatus
}

// whole monetary units
export function getInt(t: Transfer): number {
    return Math.floor(t.amount);
}

// cents
export function getFloat(t: Transfer): number {
    return t.amount - getInt(t);
}

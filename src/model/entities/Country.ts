
// super simplified
export interface Country {
    alpha2: string, // used as UID, i.e. MA
    alpha3?: string, // i.e. MAR
    numeric?: number, // i.e. 504
    name: string, // i.e. Morocco
    fullName?: string, // i.e. Kingdom of Morocco
    flagPath?: string, // i.e. {Server.API_ROOT}/flags/mar.png
}

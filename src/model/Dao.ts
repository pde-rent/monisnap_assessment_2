
// this mocks our web-server calls to provide mock data to our front
// it is meant to be a drop-in replacement to be used as http interface by our DAO object
// thanks to babel we can just load the JSON with import * from xxx.json
import * as GET_USERS from "../assets/data/mock/api/v1/get-users.json";
import * as GET_ACCOUNTS from "../assets/data/mock/api/v1/get-accounts.json";
import * as GET_NEWS from "../assets/data/mock/api/v1/get-news.json";
import * as GET_COUNTRIES from "../assets/data/mock/api/v1/get-countries.json";
import * as GET_TRANSFERS from "../assets/data/mock/api/v1/get-transfers.json";
import * as GET_RECIPIENTS from "../assets/data/mock/api/v1/get-recipients.json";
import {User} from "../model/entities/user";
import {Transfer} from "../model/entities/Transfer";
import {Server, State} from "../constants";
import {Country} from "./entities/Country";
import {News} from "./entities/News";

namespace MockServer {
// @ts-ignore
    export const getUser = (uid: string):           User => GET_USERS[uid] as User;
// @ts-ignore
    export const getNews = ():                      News[] => Object.values(GET_NEWS) as News[];
// @ts-ignore
    export const getCountry = (alpha2: string):     Country => GET_COUNTRIES[alpha2] as Country;
// @ts-ignore
    export const getTransfers = (userUid: string):  Transfer[] => Object.values(GET_TRANSFERS as {[key: string]: Transfer})
        .filter(t => t.senderUid == userUid || t.recipientUid == userUid) as Transfer[];
// @ts-ignore
    export const getRecipients = (userUid: string): User[] => GET_RECIPIENTS[uid] as User[];
// @ts-ignore
    export const getAccount = (userUid: string):    Account => GET_ACCOUNTS[uid] as Account;
}

export class Dao {

    constructor() {}

    public getFlagUrl(country: Country): string {
        return "https://www.countryflags.io/" + country.alpha2 + "/flat/64.png"; // using 64 pix by default
    }
    public getUserAvatarPic(user: User): string {
        return Server.REST_ROOT + (user.avatarPath ? user.avatarPath : "/avatars/placeholder");
    }

    public getUserCountryPic(user: User): string {
        return Server.REST_ROOT + DAO.getFlagUrl(DAO.getCountry(user.countryAlpha2));
    }

    public getTransferCount(recipientUid: string): number {
        return this.getTransfers()
            ?.filter(t => t.recipientUid == recipientUid)
            ?.length || 0;
    }

    public getUser(uid: string): User           { return MockServer.getUser(uid); }
    public getCountry(alpha2: string): Country  { return MockServer.getCountry(alpha2); }
    public getTransfers(): Transfer[]           { return MockServer.getTransfers(State.USER.uid); }
    public getRecipients(): User[]              { return MockServer.getRecipients(State.USER.uid); }
    public getNews(): News[]                    { return MockServer.getNews(); }
    public getAccount(): Account                { return MockServer.getAccount(State.USER.uid); }
}

export const DAO = new Dao();

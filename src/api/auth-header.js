import { getUser } from "../util/UserHelper";

export default function authHeader() {
    const user = getUser();

    if (user && user.token) {
        return {Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}
import {atom, selector} from "recoil";
import axios from "axios";

//Async Data Queries In Recoil
export const notifications = atom({
    key:"networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

//Selectors => Can be Derived from atoms or other selectors

export const totalNotificationsSelector = selector({
    key : "totalNotificationsSelector",
    get : ({get}) => {
        const allNotifications = get(notifications);
        
        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.network;
    }
})
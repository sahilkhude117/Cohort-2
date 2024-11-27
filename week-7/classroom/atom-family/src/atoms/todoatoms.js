import { atomFamily, selectorFamily} from"recoil";
import {TODOS} from "../todos";

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return TODOS.find(x => x.id === id);
    }
})

// selector family
export const todoFamily = atomFamily({
    key: "todoFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://sum-server..100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
})
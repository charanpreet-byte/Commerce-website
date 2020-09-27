import { action } from "easy-peasy";

export default {
    count: 0,
    add: action((state, id) => {
        return state.count + 1
    })
};

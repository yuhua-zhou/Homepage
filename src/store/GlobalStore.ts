import {GlobalActionTypes} from "./GlobalActions";

export type GlobalState = {
    navigateSelectedIndex: number
}
const initialGlobalState: () => GlobalState = () => ({
    navigateSelectedIndex: 0
});

const globalReducer: (state: GlobalState, action: GlobalActionTypes) => GlobalState = (state = initialGlobalState(), action) => {
    switch (action.type) {
        case "SetNavigateSelectedIndex":
            return {...state, navigateSelectedIndex: action.payload}
        default:
            return state;
    }
};
export default globalReducer;

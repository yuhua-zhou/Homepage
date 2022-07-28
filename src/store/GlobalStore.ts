import {GlobalActionTypes} from "./GlobalActions";

export type GlobalState = {}
const initialGlobalState: () => GlobalState = () => ({});
const globalReducer: (state: GlobalState, action: GlobalActionTypes) => GlobalState = (state = initialGlobalState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default globalReducer;

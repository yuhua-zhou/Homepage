import {GlobalActionTypes} from "./GlobalActions";
import awardList from "../assets/database/awards.json";
import educationList from "../assets/database/education.json";
import internshipList from "../assets/database/internship.json";
import lifeList from "../assets/database/lifes.json";
import mileStoneList from "../assets/database/milestonelist.json";
import publicationsList from "../assets/database/publications.json";

export type GlobalState = {
    awardList: any[]
    educationList: any[]
    internshipList: any[]
    lifeList: any[]
    mileStoneList: any[]
    publicationsList: any[]
}
const initialGlobalState: () => GlobalState = () => ({
    awardList,
    educationList,
    internshipList,
    lifeList,
    mileStoneList,
    publicationsList
});

const globalReducer: (state: GlobalState, action: GlobalActionTypes) => GlobalState = (state = initialGlobalState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default globalReducer;

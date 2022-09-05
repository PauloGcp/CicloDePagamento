import { combineReducers } from "redux";
import dashBoardReducer from "../dashboard/dashBoardReducer";

const rootReducer = combineReducers({
    dashboard: dashBoardReducer
})

export default rootReducer
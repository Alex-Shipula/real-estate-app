import { combineReducers } from "redux";
import { AuthReducer, GetDataReducer } from "./Auth";

const reducers = combineReducers({data:GetDataReducer,auth:AuthReducer});

export default reducers;
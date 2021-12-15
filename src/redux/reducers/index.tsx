import { combineReducers } from "redux";
import { AuthReducer, GetDataReducer,GetDataPropertiesIdReducer } from "./Reducers";

const reducers = combineReducers({data:GetDataReducer,auth:AuthReducer,dataPropertiesId:GetDataPropertiesIdReducer});

export default reducers;
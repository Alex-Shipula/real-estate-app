import { all } from "redux-saga/effects";
import {watchAuth, watchConfirmEmail,watchDataFilters,watchDataPropertiesId} from "./Sagas";


export default function* rootSaga():Generator {
   yield all([watchAuth(),watchConfirmEmail(),watchDataFilters(),watchDataPropertiesId()]);
}
import { all } from "redux-saga/effects";
import {watchAuth, watchConfirmEmail,watchDataFilters} from "./Auth";


export default function* rootSaga():Generator {
   yield all([watchAuth(),watchConfirmEmail(),watchDataFilters()]);
}
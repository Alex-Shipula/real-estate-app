import { all } from "redux-saga/effects";
import {watchAuth, watchConfirmEmail,watchDataFiltersWorker} from "./Auth";


export default function* rootSaga():Generator {
   yield all([watchAuth(),watchConfirmEmail(),watchDataFiltersWorker()]);
}
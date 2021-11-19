import { call, takeLatest } from "redux-saga/effects";
import { signUpData } from "../actions/Actions";
import { signUp } from "./api/Api";
import AuthLocalStorage from "../../helpers/AuthLocalStorage";
import signUpDataType from "../Types";


function* SignUpWorker(action: signUpDataType) {
  try {
    const {data} = yield call(signUp, action.payload);
    AuthLocalStorage.login(data.token);
    console.log(AuthLocalStorage.getToken());
    
  } catch (error) {
    console.log(error);
  }
}

export default function* watchAuth():Generator {
  yield takeLatest(signUpData, SignUpWorker);
}

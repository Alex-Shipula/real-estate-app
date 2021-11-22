import { call, takeLatest } from "redux-saga/effects";
import { resendConfirmEmail, signUpData } from "../actions/Actions";
import { confirmEmail,signUp } from "./api/Api";
import AuthLocalStorage from "../../helpers/AuthLocalStorage";
import { confirmEmailType,signUpDataType } from "../Types";


function* SignUpWorker(action: signUpDataType) {
  try {
    const {data} = yield call(signUp, action.payload);
    AuthLocalStorage.login(data.token);
    console.log(AuthLocalStorage.getToken());
    
  } catch (error) {
    console.log(error);
  }
}

function* confirmEmailWorker(action: confirmEmailType) {
  try {
   const{data} = yield call(confirmEmail, action.token);
   console.log(data);
   
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth():Generator {
  yield takeLatest(signUpData, SignUpWorker);
}

export function* watchConfirmEmail():Generator {
  yield takeLatest(resendConfirmEmail, confirmEmailWorker);
}


import { call, takeLatest } from "redux-saga/effects";
import { useDispatch } from "react-redux";
import { resendConfirmEmail, signUpData,getDataFilters, getDataStore } from "../actions/Actions";
import { confirmEmail,signUp,getPropertiesFilters } from "./api/Api";
import AuthLocalStorage from "../../helpers/AuthLocalStorage";
import { confirmEmailType,getDataFiltersType,signUpDataType } from "../Types";



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

function* getDataFiltersWorker(action: getDataFiltersType) {
  const dispatch = useDispatch();
  try {
   const{data} = yield call(getPropertiesFilters, action.token, action.query);
   yield dispatch(getDataStore(data))
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

export function* watchDataFiltersWorker():Generator {
  yield takeLatest(getDataFilters, getDataFiltersWorker);
}

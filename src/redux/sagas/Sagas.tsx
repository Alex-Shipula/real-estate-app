import { call, put, takeLatest } from "redux-saga/effects";
import { resendConfirmEmail, signUpData, getDataFilters, getDataStore,getDataPropertiesId,getPropertiesId } from "../actions/Actions";
import { confirmEmail, signUp, getPropertiesFilters, getPropertiesFiltersToken,getPropertiesDetailsId } from "./api/Api";
import AuthLocalStorage from "../../helpers/AuthLocalStorage";
import { confirmEmailType, signUpDataType, getDataFiltersTypeToken,getPropertiesIdType } from "../Types";

function* SignUpWorker(action: signUpDataType) {
  try {
    const { data } = yield call(signUp, action.payload);
    AuthLocalStorage.login(data.token);
    console.log(AuthLocalStorage.getToken());
  } catch (error) {
    console.log(error);
  }
}

function* confirmEmailWorker(action: confirmEmailType) {
  try {
    const { data } = yield call(confirmEmail, action.token);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function* getDataFiltersWorker(action: getDataFiltersTypeToken) {
  try {
    const data = yield call(getPropertiesFiltersToken,action.token,action.query);
    yield put(getDataStore(data.data));
  } catch (error) {
    console.log(error);
  }
}

function* getDataPropertiesIdWorker(action: getPropertiesIdType) {
  try {
    const dataId = yield call(getPropertiesDetailsId,action.token,action.id);
    yield put(getDataPropertiesId(dataId.data));
  } catch (error) {
    console.log(error);
  }
}

export function* watchAuth(): Generator {
  yield takeLatest(signUpData, SignUpWorker);
}

export function* watchConfirmEmail(): Generator {
  yield takeLatest(resendConfirmEmail, confirmEmailWorker);
}

export function* watchDataFilters(): Generator {
  yield takeLatest(getDataFilters, getDataFiltersWorker);
}
export function* watchDataPropertiesId(): Generator {
  yield takeLatest(getPropertiesId, getDataPropertiesIdWorker);
}
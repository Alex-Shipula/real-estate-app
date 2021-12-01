import { confirmEmailType,signUpDataType,payload,getDataFiltersType } from "../Types";

export function signUpData(payload: payload): signUpDataType {
  return {
    type: "SIGN_UP",
    payload
  };
}

export function resendConfirmEmail(token: string): confirmEmailType {
  return {
    type: "CONF_EMAIL",
    token
  };
}

export function getDataFilters(token: string, query:string): getDataFiltersType {
  return {
    type: "GET_DATA_FILTERS",
    token,
    query
  };
}
export function getDataStore(data:Record<string, unknown>):any {
  return{
    type: "GET_DATA_STORE",
    data
  }
}
import { confirmEmailType,signUpDataType,payload,getDataFiltersTypeToken,getDataFiltersType } from "../Types";

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

export function getDataFiltersToken(token: string, query:string): getDataFiltersTypeToken {
  return {
    type: "GET_DATA_FILTERS_TOKEN",
    token,
    query
  };
}

export function getDataFilters(query:string): getDataFiltersType {
  return {
    type: "GET_DATA_FILTERS",
    query
  };
}

export function getDataStore(data:any):any {
  return{
    type: "GET_DATA_STORE",
    data
  }
}
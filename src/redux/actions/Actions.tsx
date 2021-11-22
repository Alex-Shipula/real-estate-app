import { confirmEmailType,signUpDataType,payload } from "../Types";

export function signUpData(payload: payload): signUpDataType {
  return {
    type: "SIGN_UP",
    payload,
  };
}

export function resendConfirmEmail(token: string): confirmEmailType {
  return {
    type: "CONF_EMAIL",
    token,
  };
}
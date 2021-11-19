import signUpDataType from "../Types";

type payload = {
    username:string,
    email:string,
    password:string
};

export function signUpData(payload: payload): signUpDataType {
  return {
    type: "SIGN_UP",
    payload,
  };
}

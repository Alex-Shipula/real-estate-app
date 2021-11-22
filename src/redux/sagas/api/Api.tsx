
import axios from "axios";
import { payload } from "../../Types";

export function signUp(data: payload) {
  return axios({
    url: "https://propchain-api.herokuapp.com/api/v1/auth/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}

export function confirmEmail(token: string) {
  return axios({
    url: "https://propchain-api.herokuapp.com/api/v1/email/resend-confirmation-link",
    method: "POST",
    headers: {
       'Authorization': `token ${token}`
    }
  });
}

import axios from "axios";
type payload = {
  username:string,
  email:string,
  password:string
};
export function signUp(data:payload) {
  return axios({
    url: "https://propchain-api.herokuapp.com/api/v1/auth/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  });
}

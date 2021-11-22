export interface signUpDataType {
  type: string;
  payload: payload;
}
export interface payload {
  username: string;
  email: string;
  password: string;
}
export interface confirmEmailType {
  type: string;
  token: string;
}

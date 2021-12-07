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
export interface getDataFiltersTypeToken {
  type:string;
  token:string;
  query:string;
}
export interface getDataFiltersType {
  type:string;
  query:string;
}
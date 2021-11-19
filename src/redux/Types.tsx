interface signUpDataType {
    type: string,
    payload:payload,
  }
  type payload = {
      username:string,
      email:string,
      password:string
  };
export default signUpDataType;
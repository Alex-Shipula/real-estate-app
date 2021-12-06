

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export const GetDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DATA_STORE":    
      return { ...state, loading: false, ...action.data };
    default:
      return state;
  }
}
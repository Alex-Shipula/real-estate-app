

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, loading: true };
    default:
      return state;
  }
};

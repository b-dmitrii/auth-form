import { extend, genToken } from "../../utils";

const initialState = {
  isLoggedIn: false,
  user: {
    login: "",
    password: "",
    token: "",
  },
};

export const ActionType = {
  LOAD_DATA: `LOAD_DATA`,
  IS_LOGGED: `IS_LOGGED`,
  SET_USER: `SET_USER`,
  SET_TOKEN: `SET_TOKEN`,
};

export const ActionCreator = {
  loadData: (data) => ({
    type: ActionType.LOAD_DATA,
    payload: data,
  }),
  isLogged: (flag) => ({
    type: ActionType.IS_LOGGED,
    payload: flag,
  }),
  setUser: (obj) => ({
    type: ActionType.SET_USER,
    payload: obj,
  }),
  setToken: (token) => ({
    type: ActionType.SET_TOKEN,
    payload: token,
  }),
};

export const Operation = {
  loadData: (data) => (dispatch) => {
    setTimeout(() => {      
      dispatch(ActionCreator.setUser(data));
      dispatch(ActionCreator.setToken(genToken(12)));
      dispatch(ActionCreator.isLogged(true));
    }, 2000);
  },

  isLogged: (flag) => (dispatch) => {
    dispatch(ActionCreator.isLogged(flag));
  },  
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_LOGGED:
      return extend(state, { isLoggedIn: action.payload });

    case ActionType.SET_USER:
      return extend(state, {
        user: extend(state.user, {
          login: action.payload.login,
          password: action.payload.password,
        }),
      });

    case ActionType.SET_TOKEN:
      return extend(state, {
        user: extend(state.user, {
          token: action.payload,
        }),
      });

    default:
      return state;
  }
};

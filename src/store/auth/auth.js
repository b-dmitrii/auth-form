const initialState = {
   isLoggedIn: false
  };
  
 
  export const ActionType = {
    IS_LOGGED: `IS_LOGGED`,   
  };
  
  export const ActionCreator = {
    isLogged: (flag) => ({
      type: ActionType.IS_LOGGED,
      payload: flag,
    }),   
  };
  
  export const Operation = {
    isLogged: (flag) => (dispatch) => {
      dispatch(ActionCreator.isLogged(flag));
    },    
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.IS_LOGGED:
        return {
          ...state,
          isLoggedIn: action.payload,
        };
  
     
      default:
        return state;
    }
  };  
  
// set the initial state first
export const initialState = {
  user: null,
}


// set the action for dispatch in the data layer
export const actionTypes = {
  SET_USER: "SET_USER",
};


// inside the reducer listen to the action
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    //if you have received the set user action
    case actionTypes.SET_USER :
      return {
        //return whatever the data layer looks like 
        ...state,
        //but change the user payload
        user: action.user
      };

      //if we dont listen to the action the return the state
      default: 
      return state;
  }
}

export default reducer;
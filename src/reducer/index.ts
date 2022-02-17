import { combineReducers } from "redux";

const defaultState = { username: '' };

const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});

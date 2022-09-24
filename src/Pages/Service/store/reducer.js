import { FETCH_ALL_SERVICE, SET_LOADING } from "./actionTypes";

const initialState = {
  loading: false,
  allServices: [],
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_SERVICE:
      return {
        ...state,
        allServices: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
};

export default serviceReducer;

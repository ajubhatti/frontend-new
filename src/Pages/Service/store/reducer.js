import produce from "immer";
import {
  FETCH_ALL_OPERATOR,
  FETCH_ALL_SERVICE,
  SET_LOADING,
} from "./actionTypes";

const initialState = {
  loading: false,
  allServices: [],
  allOperators: {},
};

const serviceReducer = produce((state = initialState, action) => {
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

    case FETCH_ALL_OPERATOR:
      return {
        ...state,
        allOperators: payload,
      };

    default:
      return state;
  }
});
export default serviceReducer;

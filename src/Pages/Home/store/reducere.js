import produce from "immer";
import { FETCH_BANNER_LIST, FETCH_TIKER_LIST, SET_LOADING } from "./actionType";

const initialState = {
  loading: false,
  bannerListData: [],
  tickerListData: [],
};

const homeReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case FETCH_BANNER_LIST:
      return {
        ...state,
        bannerListData: payload,
      };

    case FETCH_TIKER_LIST:
      return {
        ...state,
        tickerListData: payload,
      };

    default:
      return state;
  }
});

export default homeReducer;

import produce from "immer";
import {
  FETCH_ALL_RECHARGE_LIST,
  SET_LOADING_RECHARGES,
  SET_PAGE_RECHARGE,
  SET_SEARCH_RECHARGE,
  SET_SIZE_PER_PAGE_RECHARGE,
  SET_SORT_FIELD_RECHARGE,
  SET_SORT_ORDER_RECHARGE,
} from "./actionTypes";

const initialState = {
  rechargesLoading: false,
  userRechargesData: {},
  rechargeListData: [],
  page: 1,
  sizePerPage: 25,
  totalSize: 0,
  search: "",
  sortField: "created",
  sortOrder: "DESC",
};

const rechargeReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_RECHARGES:
      return {
        ...state,
        rechargesLoading: payload,
      };

    case FETCH_ALL_RECHARGE_LIST:
      return {
        ...state,
        userRechargesData: payload,
        rechargesLoading: false,
        totalSize: payload?.total || 0,
        rechargeListData: payload.data,
      };

    case SET_SIZE_PER_PAGE_RECHARGE:
      return {
        ...state,
        sizePerPage: payload,
      };

    case SET_PAGE_RECHARGE:
      return {
        ...state,
        page: payload,
      };

    case SET_SEARCH_RECHARGE:
      return {
        ...state,
        search: payload,
      };

    case SET_SORT_FIELD_RECHARGE:
      return {
        ...state,
        sortField: payload,
      };

    case SET_SORT_ORDER_RECHARGE:
      return {
        ...state,
        sortOrder: payload,
      };

    default:
      return state;
  }
});

export default rechargeReducer;

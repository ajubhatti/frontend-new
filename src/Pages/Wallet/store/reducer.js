import produce from "immer";
import {
  FETCH_ALL_WALLET_LIST,
  SET_LOADING_WALLET,
  SET_PAGE_WALLET,
  SET_SEARCH_WALLET,
  SET_SIZE_PER_PAGE_WALLET,
  SET_SORT_FIELD_WALLET,
  SET_SORT_ORDER_WALLET,
} from "./actionTypes";

const initialState = {
  walletLoading: false,
  userWalletData: {},
  walletListData: [],
  page: 1,
  sizePerPage: 25,
  totalSize: 0,
  search: "",
  sortField: "created",
  sortOrder: "DESC",
};

const walletReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_WALLET:
      return {
        ...state,
        walletLoading: payload,
      };

    case FETCH_ALL_WALLET_LIST:
      return {
        ...state,
        userWalletData: payload,
        walletLoading: false,
        totalSize: payload?.total || 0,
        walletListData: payload.data,
      };

    case SET_SIZE_PER_PAGE_WALLET:
      return {
        ...state,
        sizePerPage: payload,
      };

    case SET_PAGE_WALLET:
      return {
        ...state,
        page: payload,
      };

    case SET_SEARCH_WALLET:
      return {
        ...state,
        search: "",
        search: payload,
      };

    case SET_SORT_FIELD_WALLET:
      return {
        ...state,
        sortField: payload,
      };

    case SET_SORT_ORDER_WALLET:
      return {
        ...state,
        sortOrder: payload,
      };

    default:
      return state;
  }
});

export default walletReducer;

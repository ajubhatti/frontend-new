import produce from "immer";
import {
  FETCH_ALL_TRANSACTION_LIST,
  SET_LOADING_TRANSACTION,
  SET_PAGE_TRANSACTION,
  SET_SEARCH_TRANSACTION,
  SET_SIZE_PER_PAGE_TRANSACTION,
  SET_SORT_FIELD_TRANSACTION,
  SET_SORT_ORDER_TRANSACTION,
} from "./actionTypes";

const initialState = {
  transactionsLoading: false,
  userTransactionsData: {},
  transactionListData: [],
  page: 1,
  sizePerPage: 25,
  totalSize: 0,
  search: "",
  sortField: "created",
  sortOrder: "DESC",
};

const transactionReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING_TRANSACTION:
      return {
        ...state,
        transactionsLoading: payload,
      };

    case FETCH_ALL_TRANSACTION_LIST:
      return {
        ...state,
        userTransactionsData: payload,
        transactionsLoading: false,
        totalSize: payload?.total || 0,
        transactionListData: payload.data,
      };

    case SET_SIZE_PER_PAGE_TRANSACTION:
      return {
        ...state,
        sizePerPage: payload,
      };

    case SET_PAGE_TRANSACTION:
      return {
        ...state,
        page: payload,
      };

    case SET_SEARCH_TRANSACTION:
      return {
        ...state,
        search: "",
        search: payload,
      };

    case SET_SORT_FIELD_TRANSACTION:
      return {
        ...state,
        sortField: payload,
      };

    case SET_SORT_ORDER_TRANSACTION:
      return {
        ...state,
        sortOrder: payload,
      };

    default:
      return state;
  }
});

export default transactionReducer;

import { FETCH_ALL_WALLET_LIST, SET_LOADING } from "./actionTypes";

const initialState = {
  walletLoading: false,
  userWalletData: {},
};

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ALL_WALLET_LIST:
      return {
        ...state,
        userWalletData: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        walletLoading: payload,
      };

    default:
      return state;
  }
};

export default walletReducer;

import {
  FETCH_BANK_LIST,
  SET_PROFILE,
  SET_PROFILE_LOADING,
  SET_USERNAME,
  SET_USER_TRANSACTION_LISTING,
  SET_USER_WALLET_DATA,
  SET_USER_WALLET_LISTING,
  GET_ACTIVITY_LOADING,
  GET_ACTIVITY,
  GET_TYPE_LOADING,
  GET_TYPE
} from "./actionTypes";

import produce from "immer";

const initialState = {
  profileLoading: false,
  getActivityLoading: false,
  typeLoading:false,
  userData: {},
  userWallet: {},
  userWalletList: [],
  userTransactionList: [],
  activeMemberships: [],
  volumesMemberships: [],
  bankList: [],
  activity: [],
  type:[]
};

const profileReducer = produce((state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROFILE_LOADING:
      state.profileLoading = payload;
      break;

    // need to store profile
    case SET_PROFILE:
      state.userData = payload;
      break;

    // need to store user name
    case SET_USERNAME:
      if (!!state.user) state.user.username = payload;
      break;

    // wallet data
    case SET_USER_WALLET_DATA:
      state.userWallet = payload;
      break;

    // wallet list
    case SET_USER_WALLET_LISTING:
      state.userWalletList = payload;
      break;

    // transaction list
    case SET_USER_TRANSACTION_LISTING:
      state.userTransactionList = payload;
      break;
    // case SAVE_ADDRESS:
    //   return {
    //     ...state,
    //     profileLoading: true,
    //   };
    // case SAVE_ADDRESS_SUCCESS:
    //   return {
    //     ...state,
    //     profileLoading: false,
    //   };
    // case SAVE_ADDRESS_ERROR:
    //   return {
    //     ...state,
    //     profileLoading: false,
    //   };

    // case RESET:
    //   Object.keys(initialState).forEach((key) => {
    //     state[key] = initialState[key];
    //   });
    //   break;

    case FETCH_BANK_LIST:
      return {
        ...state,
        bankList: payload,
      };

    case GET_ACTIVITY_LOADING:
      state.getActivityLoading = payload;
      break;
    
    case GET_ACTIVITY:
      state.activity = payload;
      break;
    case GET_TYPE_LOADING: 
      state.typeLoading = payload
      break;
    case GET_TYPE:
      state.type = payload
      break;
    default:
      return state;
  }
});

export default profileReducer;

import { combineReducers } from "redux";
import homeReducer from "../Pages/Home/store/reducere";
import profileReducer from "../Pages/Profile/store/reducer";
import serviceReducers from "../Pages/Service/store/reducer";
import transactionReducer from "../Pages/Transactions/store/reducer";
import walletReducer from "../Pages/Wallet/store/reducer";
import authReducer from "./Actions/Auth/reducer";

const rootReducer = combineReducers({
  serviceReducers: serviceReducers,
  authReducer: authReducer,
  walletReducer: walletReducer,
  transactionReducer: transactionReducer,
  profileReducer: profileReducer,
  homeReducer: homeReducer,
});

export default rootReducer;

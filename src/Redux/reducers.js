import { combineReducers } from "redux";
import serviceReducers from "../Pages/Service/store/reducer";
import walletReducer from "../Pages/Wallet/store/reducer";
import authReducer from "./Actions/Auth/reducer";

const rootReducer = combineReducers({
  service: serviceReducers,
  auth: authReducer,
  wallet: walletReducer,
});

export default rootReducer;

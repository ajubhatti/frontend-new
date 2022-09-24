import { combineReducers } from "redux";
import serviceReducers from "../Pages/Service/store/reducer";
import authReducer from "./Actions/Auth/reducer";

const rootReducer = combineReducers({
  service: serviceReducers,
  auth: authReducer,
});

export default rootReducer;

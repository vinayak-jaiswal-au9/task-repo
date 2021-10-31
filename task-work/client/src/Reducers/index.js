import { combineReducers } from "redux";
import Photos from "./Photos";
import auth from "./auth";
export default combineReducers({
  Photos,
  auth,
});

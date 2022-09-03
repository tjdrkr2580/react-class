import { combineReducers } from "redux";
import subscribersReducer from "../subscribers/reducer";
import viewsReducer from "./reducer";

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subscribersReducer,
});

export default rootReducer;

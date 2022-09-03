import { createStore } from "redux";
import rootReducer from "./views/rootReducer";
import subscribersReducer from "./subscribers/reducer";

const store = createStore(rootReducer);

export default store;

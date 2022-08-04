import { createStore } from "redux";
import rootReducer from "../modules/List";

const store = createStore(rootReducer);

export default store;

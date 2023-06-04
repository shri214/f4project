import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducer/dataReducer";
import detailData from "./reducer/detailReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  detail: detailData,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

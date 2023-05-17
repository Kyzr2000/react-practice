//该文件用于专门暴露一个store对象，整个应用只有一个store对象
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import countReducer from "./reducer/count";
import personReducer from "./reducer/person";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  he: countReducer,
  rens: personReducer,
});
export default createStore(allReducers, applyMiddleware(thunk));

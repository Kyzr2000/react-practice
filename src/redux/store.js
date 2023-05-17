//该文件用于专门暴露一个store对象，整个应用只有一个store对象
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
import thunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));

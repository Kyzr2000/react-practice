//该文件用于专门暴露一个store对象，整个应用只有一个store对象
import { legacy_createStore as createStore } from "redux";
import countReducer from "./count_reducer";
export default createStore(countReducer);

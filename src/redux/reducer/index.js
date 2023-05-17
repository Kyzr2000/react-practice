//该文件用于汇总所有reducers
import { combineReducers } from "redux";
import count from "./count";
import persons from "./person";
//汇总所有reducer变为一个总的reducer
export default combineReducers({ count, persons });

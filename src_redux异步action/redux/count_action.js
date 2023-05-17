//该组件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from "./constant";
// import store from "./store";
//同步action返回值是Object的一般对象
export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data: data * 1,
});
export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data: data * 1,
});
//异步action，返回值是函数对象
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};

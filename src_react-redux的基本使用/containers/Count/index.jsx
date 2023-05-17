//引入count的ui组件
import CountUI from "../../components/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";

//引入connect用于链接UI组件与redux
import { connect } from "react-redux";
//返回值是对象，用于传递状态
function mapStateToProps(state) {
  return { count: state };
}
//返回值是对象，用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      dispatch(createDecrementAction(number));
    },
    jiaAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  };
}
//创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);

import { ADD_PERSON } from "../constant";
const initState = [{ id: "001", name: "tom", age: 18 }];
//初始化人的列表
export default function personReducer(preSate = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preSate];

    default:
      return preSate;
  }
}

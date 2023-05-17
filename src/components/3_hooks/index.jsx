import React from "react";
// import ReactDOM from "react-dom";
export default function Demo() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
      console.log("@");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function add() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h2>当前计数器和为：{count}</h2>
      <button onClick={add}>点我加一</button>
    </div>
  );
}

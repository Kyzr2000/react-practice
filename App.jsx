import React from "react";
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
function App() {
  return (
    <div>
      <Greeting name="world" />
    </div>
  );
}

export default App;

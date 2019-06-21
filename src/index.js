import React from "react";
import ReactDOM from "react-dom";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <h1>Hello Parcel React</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <About />
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);

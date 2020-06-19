import React from "react";
import Header from "./header";
import Cards from "./cards";
import Overview from "./overview";
import "./styles.css";


function App() {
  return (
    <>
      <Header></Header>
      <Cards/>
      <Overview />
    </>
  );
}
export default App;

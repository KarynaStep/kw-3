import { Component } from "react";
import "./App.css";

// import CiaoSection from "./components/CiaoSection";
import HiJSX from "./components/HiJSX";
import CardSection from "./components/CardSection";
import CiaoSection from "./components/CiaoSection";

class App extends Component {
  render() {
    return (
      <>
        <HiJSX />
        <CiaoSection />
        <CardSection />
      </>
    );
  }
}

export default App;

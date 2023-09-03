import { Component } from "react";
import "./App.css";

// import CiaoSection from "./components/CiaoSection";
import HiJSX from "./components/HiJSX";
import CardSection from "./components/CardSection";
import CiaoSection from "./components/CiaoSection";
import SignInForm from "./components/SignInForm";

class App extends Component {
  render() {
    return (
      <>
        {/* <HiJSX />
        <CiaoSection />
        <CardSection /> */}
        <SignInForm />
      </>
    );
  }
}

export default App;

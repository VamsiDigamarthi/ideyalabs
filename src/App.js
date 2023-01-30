import { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignSuccess from "./components/SuccessSign";

function App() {
  const [isSignSuccess, setIsSignSuccess] = useState(true);

  const signUpSuc = () => {
    setIsSignSuccess(false);
    console.log("signUpsc calling");
  };

  return (
    <div className="all-back-img">
      {isSignSuccess ? <SignUp signUpSuc={signUpSuc} /> : <SignSuccess />}
    </div>
  );
}

export default App;

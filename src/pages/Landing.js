import React from "react";
import { useState, useEffect, useRef } from "react";
import "./landing.css";
import ReactPinField from "react-pin-field";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

function Landing() {
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    completed && console.log(code);
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Collect your <span className="gradient-text">Sheep</span> for the
          Ritual
        </h1>
        <div className="gradient">
          <div className="gradient-container">
            <div className="sheep1"></div>
            <div className="sheep2"></div>
            <p>Enter your code</p>
            <form className="form-control" onSubmit={handleSubmit}>
              <ReactPinField
                length="4"
                type="text"
                className="pin-field"
                autocapitalize="off"
                autocorrect="off"
                ref={inputRef}
                autocomplete="off"
                onChange={setCode}
                onComplete={() => setCompleted(true)}
                inputmode="text"
              ></ReactPinField>
              <Link to="">
                <button type="submit" className="btn">
                  Baa Baa
                </button>
              </Link>
            </form>
            <a href="#" className="lato">
              Don’t have a Code? Join our telegram to get it!
            </a>
          </div>
        </div>
        <div className="timer-container">
          <h2>ENDS IN</h2>
          <Timer />
        </div>
      </div>
    </>
  );
}

export default Landing;

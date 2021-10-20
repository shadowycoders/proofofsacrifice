import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import "./landing.css";
import ReactPinField from "react-pin-field";
import Timer from "../components/Timer";
import Main from "./Main";
import meta from "../assets/meta.png";
export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
  ],
});

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React();

  const onClick = () => {
    activate(injectedConnector);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className="metamaskContainer">
        {!active && "Connect your Metamask"}
        <span style={{ fontFamily: "lato" }}> {account}</span>

        {active ? (
          <div>✅ </div>
        ) : (
          <button type="button" className="metamask" onClick={onClick}>
            <img src={meta} style={{ height: "30px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

function Landing() {
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (completed) {
  //     console.log(code);
  //     setClicked(true);
  //   }
  // }, [completed]);
  const emailSubmit = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();

    // if (completed) {
    //   console.log(code);
    //   setClicked(true);
    // }

    axios
      .post(`https://proofofsacrifice.com/nft`, {
        code: code,
        address: "",
      })
      .then((res) => {});
    // setClicked(true);
    // completed && console.log(code);
  };

  return (
    <>
      {clicked ? (
        <Main />
      ) : (
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
              <div className="form-control">
                <form onSubmit={handleSubmit}>
                  <ReactPinField
                    length="5"
                    type="text"
                    className="pin-field"
                    autocapitalize="off"
                    autocorrect="off"
                    autocomplete="off"
                    onChange={setCode}
                    onComplete={() => setCompleted(true)}
                    inputmode="text"
                  ></ReactPinField>
                  <Web3ReactProvider getLibrary={getLibrary}>
                    <Wallet />
                  </Web3ReactProvider>
                </form>
                <form className="emailForm" onSubmit={emailSubmit}>
                  <input type="email" placeholder="Enter your Email"></input>
                  <button className="submit">Submit</button>
                </form>
              </div>
              <button type="submit" className="btn">
                Baa Baa
              </button>

              <a
                href="https://t.me/shadowycoderscommunity"
                target="_blank"
                className="lato"
              >
                Don’t have a Code? Join our telegram to get it!
              </a>
            </div>
          </div>
          <div className="timer-container">
            <h2>ENDS IN</h2>
            <Timer />
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;

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
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [showMain, setShowMain] = useState(true);

  const onClick = () => {
    activate(injectedConnector);
  };

  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();

    if (!completed || email === '') {
      if (!completed)
        alert('You sinner! Praise a valid Code to the Gods!');
      else
        alert('You fool! our God needs your email for later punishment')
      return;
    }
    setClicked(true);

    axios
      .post(`https://proofofsacrifice.com/nft`, {
        code: code,
        address: account,
      })
      .then((res) => {});
  };

  return (
      <form className="form-control" onSubmit={handleSubmit}>
      {!clicked ? (
        <div>
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
          {active ? (
          <div>
            <div className="center">
              <span className="address" style={{ fontFamily: "lato"}}> {account}</span>
            </div>
            <div className="emailForm">
              <div className="center">
                <input className="email"
                  type="email"
                  placeholder="Enter your Email"
                  onChange={e => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="center">
                <button type="submit" className="btn">Baa Baa</button>
              </div>
            </div>
          </div>
          ) : (
        <div className="center">
          <button type="button" className="metamask" onClick={onClick}>
            Connect your Metamask<br/> <img src={meta} style={{ height: "30px" }} />
          </button>
        </div>
          )}
        </div>
        ) : (
        <div>
          You are a step closer to Salvation now. Open Source be with you.
        </div>
       )}
       </form>
  )
}

function Landing() {

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
              <Web3ReactProvider getLibrary={getLibrary}>
                <Wallet />
              </Web3ReactProvider>
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
        <Main />
    </>
  );
}

export default Landing;

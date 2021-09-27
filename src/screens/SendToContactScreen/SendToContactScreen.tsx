import React, { useState } from "react";
import { Link } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";
import Header from "../../components/Header/Header";

import "./SendToContactScreen.css";

function SendToContactScreen() {
  const [balance, setBalance] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");

  return (
    <div id="send-to-contact-screen-root">
      <div className="header-row">
        <Header
          backLinkAddress="/contacts"
          backOnClick={() => {}}
          headerTitle={`Send to ${"Alex Jordan"}`}
          editLinkAddress="/editContact/"
        />
      </div>

      <div id="profile-container">
        <div id="profile-circle" className="circle">{`${"AJ"}`}</div>
        <div
          id="profile-wallet-address"
          className="blue-text"
        >{`${"0x46Dc1b6bf1D6771b454C26AafECF5E8AA4409e89"}`}</div>
      </div>

      <div id="amount-container">
        <CapsuleInputField
          value={balance}
          forCurrency
          onChange={(e) => {
            console.log(e.target.value);
            setBalance(e.target.value);
          }}
        />
        {/* <CapsuleInputField
          value={test1}
          onChange={(e) => {
            console.log(e.target.value);
            setTest1(e.target.value);
          }}
        />
        <CapsuleInputField
          value={test2}
          rows={2}
          onChange={(e) => {
            console.log(e.target.value);
            setTest2(e.target.value);
          }}
        /> */}
        <div
          id="estimate-gas-fee"
          className="blue-text"
        >{`Tx fee: ${0.00021} ETH $${0.53}`}</div>
      </div>

      <div id="send-button">
        <CapsuleButton onClick={() => {}}>Send</CapsuleButton>
      </div>

      {/* <h1>SendToContactScreen</h1>
      <Link to="/editContact">To Edit Contact!</Link>
      <Link to="/contacts">To Contacts!</Link> */}
    </div>
  );
}

export default SendToContactScreen;

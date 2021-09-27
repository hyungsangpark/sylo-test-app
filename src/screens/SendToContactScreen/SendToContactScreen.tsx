import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";
import Header from "../../components/Header/Header";

import "./SendToContactScreen.css";
import { useContact } from "../../common/ContactContext";

function SendToContactScreen() {
  const contact = useContact();
  const history = useHistory();
  const [balance, setBalance] = useState("");

  if (contact === undefined) history.push("/contacts/");

  const initials = contact?.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div id="send-to-contact-screen-root">
      <Header
        backLinkAddress="/contacts/"
        headerTitle={`Send to ${contact?.name}`}
        editLinkAddress="/editContact/"
      />

      <div id="profile-container">
        <div id="profile-circle" className="circle">{`${initials}`}</div>
        <div
          id="profile-wallet-address"
          className="blue-text"
        >{`${contact?.address}`}</div>
      </div>

      <div id="amount-container">
        <CapsuleInputField
          value={balance}
          forCurrency
          onChange={(e) => {
            setBalance(e.target.value);
          }}
        />
        <div
          id="estimate-gas-fee"
          className="blue-text"
        >{`Tx fee: ${0.00021} ETH $${0.53}`}</div>
      </div>

      <div id="send-button">
        <CapsuleButton onClick={() => {}}>Send</CapsuleButton>
      </div>
    </div>
  );
}

export default SendToContactScreen;

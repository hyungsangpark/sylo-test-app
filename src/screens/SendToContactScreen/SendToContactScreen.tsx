import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";
import Header from "../../components/Header/Header";

import "./SendToContactScreen.css";
import { useContact } from "../../common/ContactContext";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

function SendToContactScreen() {
  const contact = useContact();
  const history = useHistory();
  const { account, library } = useWeb3React<Web3>();

  const [amount, setAmount] = useState("0");
  const [balance, setBalance] = useState(0);
  const [overBalance, setOverBalance] = useState(false);
  const [nan, setNan] = useState(false);

  if (contact === undefined) history.push("/contacts/");

  const initials = contact?.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  useEffect(() => {
    if (library != null && account != null) {
      library.eth.getBalance(account).then((value: string) => {
        setBalance(Number(library.utils.fromWei(value, "ether")));
      });
    }
  }, []);

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
        <div id="amount-input-container">
          <CapsuleInputField
            value={amount}
            forCurrency
            onChange={(e) => {
              let value = e.target.value;
              if (value.endsWith(" ET"))
                value = value.substring(0, value.length - 4);
              value = value.replace(new RegExp("([ ETH]+)"), "");

              if (isNaN(Number(value))) {
                setNan(true);
                setOverBalance(false);
              } else if (Number(value) > balance) {
                setOverBalance(true);
                setNan(false);
              } else {
                setNan(false);
                setOverBalance(false);
              }

              setAmount(value);
            }}
          />
          <div
            id="invalid-amount-notice"
            style={{ display: overBalance ? "block" : "none" }}
          >
            Amount to send exceeds balance.
          </div>
          <div
            id="invalid-input-notice"
            style={{ display: nan ? "block" : "none" }}
          >
            Amount is not a number.
          </div>
        </div>
        <div
          id="estimate-gas-fee"
          className="blue-text"
        >{`Tx fee: ${0.00021} ETH $${0.53}`}</div>
      </div>

      <div id="send-button">
        <CapsuleButton
          onClick={() => {
            alert("Send Feature is Not Implemented Yet.");
          }}
        >
          Send
        </CapsuleButton>
      </div>
    </div>
  );
}

export default SendToContactScreen;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import "./StartScreen.css";
import { injected } from "../../components/Connectors/Connectors";
import Colors from "../../assets/Colors";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";

function StartScreen() {
  const { active, account, library, connector, chainId, activate, deactivate } =
    useWeb3React<Web3>();

  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (library != null) {
      library.eth.getAccounts().then((accounts: string[]) => {
        console.log(accounts[0])

        library.eth.getBalance(accounts[0]).then((value: string) => {
          console.log(
            "value in ether: ",
            library.utils.fromWei(value, "ether")
          );
          console.log("value in wei: ", value);
        });
      });
    }
  }, [active]);

  return (
    <div className="start-screen-root">
      <img
        src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
        className="image"
      />
      <h1 className="header">Crypto address book</h1>
      <p className="description">
        The easiest and quickest way to manage <br />
        and pay your contacts. <br />
        Connect your wallet to begin.
      </p>
      <CapsuleButton
        onClick={() => {
          try {
            activate(injected);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Connect Wallet
      </CapsuleButton>
      <CapsuleInputField
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
    </div>
  );
}

export default StartScreen;

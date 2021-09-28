import { useHistory } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import "./StartScreen.css";
import { injected } from "../../components/Connectors/Connectors";

function StartScreen() {
  const { activate } = useWeb3React<Web3>();
  const history = useHistory();

  return (
    <div className="start-screen-root">
      <img
        src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
        className="image"
      />
      <h1 className="app-title">Crypto address book</h1>
      <p className="description">
        The easiest and quickest way to manage <br />
        and pay your contacts. <br />
        Connect your wallet to begin.
      </p>
      <CapsuleButton
        onClick={async () => {
          try {
            await activate(injected);
            history.push("/contacts");
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Connect Wallet
      </CapsuleButton>
    </div>
  );
}

export default StartScreen;

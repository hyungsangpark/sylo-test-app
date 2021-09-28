import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import { IContact } from "../../common/IContact";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";
import Header from "../../components/Header/Header";

import "./NewContactScreen.css";

function NewContactScreen() {
  const history = useHistory();
  const { library } = useWeb3React<Web3>();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [invalidAddress, setInvalidAddress] = useState(true);

  return (
    <div id="new-contact-screen-root">
      <Header backLinkAddress="/contacts/" headerTitle="New Contact" />

      <div id="contact-details-container">
        <CapsuleInputField
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <CapsuleInputField
          value={address}
          placeholder="Ethereum address"
          onChange={(e) => {
            setAddress(e.target.value);
            setInvalidAddress(!library?.utils.isAddress(e.target.value));
          }}
        />
        <div
          id="invalid-address-notice"
          style={{ display: invalidAddress ? "block" : "none" }}
        >
          Please enter a valid Ethereum address.
        </div>
      </div>

      <CapsuleButton disabled={invalidAddress} onClick={() => {
          if (name !== undefined && address !== undefined) {
            const contacts: IContact[] = JSON.parse(localStorage.getItem("contacts") ?? "");
            const newContact: IContact = {
              name: name,
              address: address,
            }

            contacts.push(newContact);
            
            localStorage.setItem("contacts", JSON.stringify(contacts));

            history.push("/contacts");
          }
        }}>Save</CapsuleButton>

      {/* <h1>NewContactScreen</h1>
      <Link to="/contacts">To Contacts</Link> */}
    </div>
  );
}

export default NewContactScreen;

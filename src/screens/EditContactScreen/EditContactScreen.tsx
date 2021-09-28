import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import { useContact, useContactUpdate } from "../../common/ContactContext";
import { IContact } from "../../common/IContact";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import CapsuleInputField from "../../components/CapsuleInputField/CapsuleInputField";
import Header from "../../components/Header/Header";
import "./EditContactScreen.css";

function EditContactScreen() {
  const contact = useContact();
  const updateContact = useContactUpdate();
  const history = useHistory();
  const { library } = useWeb3React<Web3>();

  if (contact === undefined) history.push("/contacts/");

  const [name, setName] = useState(contact?.name);
  const [address, setAddress] = useState(contact?.address);
  const [invalidAddress, setInvalidAddress] = useState(false);

  return (
    <div id="edit-contact-screen-root">
      <Header
        backLinkAddress="/sendToContact"
        headerTitle="Edit"
      />

      <div id="contact-details-container">
        <CapsuleInputField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <CapsuleInputField
          value={address}
          // rows={2}
          onChange={(e) => {
            setAddress(e.target.value);
            setInvalidAddress(!library?.utils.isAddress(e.target.value));
          }}
        />
        <div
          id="invalid-address-notice"
          style={{ display: invalidAddress ? "block" : "none" }}
        >
          Please enter a valid Etherium address.
        </div>
      </div>

      <div id="buttons-container">
        <CapsuleButton variant="outlined" onClick={() => {
          const contacts: IContact[] = JSON.parse(localStorage.getItem("contacts") ?? "");
          const removedContacts: IContact[] = contacts.filter((e) => !(e.name === contact?.name && e.address === contact?.address));
          localStorage.setItem("contacts", JSON.stringify(removedContacts));
          
          updateContact(undefined);
          
          history.push("/contacts");
        }}>
          Delete Contact
        </CapsuleButton>
        <CapsuleButton disabled={invalidAddress} onClick={() => {
          if (name !== undefined && address !== undefined) {
            const contacts: IContact[] = JSON.parse(localStorage.getItem("contacts") ?? "");
            const modifyContactIndex: number = contacts.findIndex((e) => e.name === contact?.name && e.address === contact?.address);
            console.log("Before modify: ", contacts);
            
            contacts[modifyContactIndex].name = name;
            contacts[modifyContactIndex].address = address;
            console.log("Before modify: ", contacts);
            
            localStorage.setItem("contacts", JSON.stringify(contacts));

            updateContact({
              name: name,
              address: address,
            });

            history.push("/sendToContact");
          }
        }}>Save</CapsuleButton>
      </div>

      {/* <h1>EditContactScreen</h1>
      <Link to="/editContent">Back to Send To Contact</Link>
      <Link to="/contacts">Back to Contacts</Link> */}
    </div>
  );
}

export default EditContactScreen;

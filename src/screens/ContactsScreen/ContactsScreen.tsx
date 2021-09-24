import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import { injected } from "../../components/Connectors/Connectors";
import ContactRow from "../../components/ContactRow/ContactRow";

import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import Colors from "../../assets/Colors";
import NewContactRow from "../../components/NewContactRow/NewContactRow";

import "./ContactsScreen.css";
import Header from "../../components/Header/Header";
import { IContact } from "../../common/IContact";
import { loadContacts, saveContacts } from "../../common/ContactsLoader";

function ContactsScreen() {
  const history = useHistory();
  const { account, active, deactivate } = useWeb3React<Web3>();
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    // If metamask wallet is not active, send user back to the initial screen.
    if (!active) history.push("/");

    const contacts = localStorage.getItem("contacts");

    if (contacts === null) localStorage.setItem("contacts", "[]");
    
    setContacts(JSON.parse(contacts ?? "[]"));
  }, []);
  
  useEffect(() => {
    // If metamask wallet is not active, send user back to the initial screen.
    if (!active) history.push("/");
  }, [active]);

  return (
    <div>
      <Header
        backLinkAddress="/"
        // backOnClick={deactivate}
        backOnClick={() => setContacts([...contacts, {name: "Spark Mobile", address: "hey!"}])}
        headerTitle="Address Book"
      />

      <Link to="/newContact" style={{ textDecoration: "none" }}>
        <NewContactRow />
      </Link>

        {contacts.map((contact, i) => {
          console.log("this is inside contact");
          return <Link
            to="/sendToContact/"
            className="remove-underline"
            id={i.toString()}
            onClick={() => {
              console.log();
            }}
          >
            <ContactRow name={contact.name} />
          </Link>;
        })}
      <div className="contact-rows">
      </div>

      <Link to="/" style={{ width: "100%", marginTop: 10 }}>
        <CapsuleButton
          color={Colors.Blue}
          onClick={deactivate}
        >
          Disconnect
        </CapsuleButton>
      </Link>
    </div>
  );
}

export default ContactsScreen;

import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CapsuleButton from "../../components/CapsuleButton/CapsuleButton";
import ContactRow from "../../components/ContactRow/ContactRow";

import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import NewContactRow from "../../components/NewContactRow/NewContactRow";

import "./ContactsScreen.css";
import Header from "../../components/Header/Header";
import { IContact } from "../../common/IContact";
import { useContactUpdate } from "../../common/ContactContext";

function ContactsScreen() {
  const history = useHistory();
  const setContact = useContactUpdate();
  const { active, deactivate } = useWeb3React<Web3>();
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
    <div className="contacts-screen-root">
      <Header
        backLinkAddress="/"
        backOnClick={() =>
          setContacts([...contacts, { name: "Spark Mobile", address: "hey!" }])
        }
        headerTitle="Address Book"
      />

      <div className="new-contacts-row">
        <Link to="/newContact" style={{ textDecoration: "none" }}>
          <NewContactRow />
        </Link>
      </div>

      <div className="contact-rows">
        {contacts.map((contact, i) => {
          return (
            <Link
              to="/sendToContact/"
              className="contact-row remove-underline"
              id={i.toString()}
              onClick={() => {
                setContact(contact);
              }}
            >
              <ContactRow name={contact.name} />
            </Link>
          );
        })}
      </div>

      <Link to="/" className="disconnect-button-row">
        <CapsuleButton color="var(--app-blue)" onClick={deactivate}>
          Disconnect
        </CapsuleButton>
      </Link>
    </div>
  );
}

export default ContactsScreen;

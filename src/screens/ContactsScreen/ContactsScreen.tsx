import React from "react";
import { Link } from "react-router-dom";

function ContactsScreen() {
  return (
    <div>
      <h1>ContactsScreen</h1>

      <Link to="/newContact">To New Contact!</Link>
      <Link to="/sendToContact">To Send To Contact!</Link>
      <Link to="/">To Start Screen!</Link>
    </div>
  );
}

export default ContactsScreen;

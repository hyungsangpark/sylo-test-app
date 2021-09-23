import React from 'react';
import { Link } from 'react-router-dom';

function SendToContactScreen() {
  return (
    <div>
      <h1>SendToContactScreen</h1>
      <Link to="/editContact">To Edit Contact!</Link>
      <Link to="/contacts">To Contacts!</Link>
    </div>
  );
}

export default SendToContactScreen;
import React from 'react';
import { Link } from 'react-router-dom';

function EditContactScreen() {
  return (
    <div>
      <h1>EditContactScreen</h1>
      <Link to="/editContent">Back to Send To Contact</Link>
      <Link to="/contacts">Back to Contacts</Link>
    </div>
  );
}

export default EditContactScreen;
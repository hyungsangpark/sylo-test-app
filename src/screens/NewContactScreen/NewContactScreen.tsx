import React from 'react';
import { Link } from 'react-router-dom';

function NewContactScreen() {
  return (
    <div>
      <h1>NewContactScreen</h1>
      <Link to="/contacts">To Contacts</Link>
    </div>
  );
}

export default NewContactScreen;
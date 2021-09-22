import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

function StartScreen() {
  return (
    <div>
      <h1>StartScreen</h1>
      <Link to="/contacts">To Contacts after wallet connecting!</Link>
      <Button onClick={() => {console.log("lol")}}><Link to="/newContact">Connect Wallet</Link></Button>
    </div>
  );
}

export default StartScreen;
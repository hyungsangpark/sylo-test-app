import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

  return (
    <div id="root">
      <img
        src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
        className="image"
      />
      <h1 className="header">Crypto address book</h1>
      <Link to="/contacts">
        <Button
          onClick={async () => {
          }}
        >
          Link to wallet (filled)
        </Button>
      </Link>
    </div>
  );
}

export default StartScreen;

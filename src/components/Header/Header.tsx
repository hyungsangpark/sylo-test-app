import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

interface IHeaderProps {
  backLinkAddress: string;
  backOnClick: () => void;
  editLinkAddress?: string;
  editOnClick?: () => void;
  headerTitle?: string;
}

function Header({
  backLinkAddress,
  backOnClick,
  editLinkAddress,
  editOnClick,
  headerTitle,
}: IHeaderProps) {
  return (
    <div className="header-root">
      <div
        className="header-button-area header-back-button"
        onClick={backOnClick}
      >
        {"＜"}
      </div>
      {/* <Link
        to={backLinkAddress}
        className="remove-underline "
      >
      </Link> */}
      <div className="header-title">{headerTitle ?? ""}</div>
      <div className="header-button-area">
        <div
          className="header-edit-button"
          style={editLinkAddress ? {} : { display: "none" }}
          onClick={editOnClick}
        >
          Edit
        </div>
      </div>
      {/* <Link
        to={editLinkAddress ?? ""}
        className="remove-underline header-button-area"
      >
      </Link> */}
    </div>
  );
}

export default Header;

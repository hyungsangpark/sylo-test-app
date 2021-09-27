import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

interface IHeaderProps {
  backLinkAddress: string;
  backOnClick?: () => void;
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
      <Link to={backLinkAddress} className="remove-underline ">
        <div
          className="header-button-area header-back-button"
          onClick={backOnClick}
        >
          {"＜"}
        </div>
      </Link>
      <div className="header-title">{headerTitle ?? ""}</div>
      <div className="header-button-area">
        <Link
          to={editLinkAddress ?? ""}
          className="remove-underline header-button-area"
          style={editLinkAddress ? {} : { display: "none" }}
        >
          <div
            className="header-edit-button"
            onClick={editOnClick}
          >
            Edit
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

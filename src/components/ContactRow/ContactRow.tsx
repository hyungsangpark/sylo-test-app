import React from "react";

import "./ContactRow.css"

interface IContactRow {
  name: string;
}

function ContactRow({ name }: IContactRow) {
  const initial = name.split(" ").map((n) => n[0]).join("");
  
  return (
    <div className="contact-row-root">
      <div className="circle">{initial}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default ContactRow;

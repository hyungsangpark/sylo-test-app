import "./ContactRow.css"

interface IContactRow {
  name: string;
}

function ContactRow({ name }: IContactRow) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  
  return (
    <div className="contact-row-root">
      <div className="circle contact-row-circle">{initials}</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default ContactRow;

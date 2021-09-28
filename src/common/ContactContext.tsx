import { createContext, ReactNode, useContext, useState } from "react";
import { IContact } from "./IContact";

export type IUpdateContact = (contact: IContact | undefined) => void;

const ContactContext = createContext<IContact | undefined>(undefined);
const ContactUpdateContext = createContext<IUpdateContact>(() => {});

export function useContact() {
  return useContext(ContactContext);
}

export function useContactUpdate() {
  return useContext(ContactUpdateContext);
}

export function ContactProvider({children}: {children: ReactNode }) {
  const [contact, setContact] = useState<IContact>();

  return (
    <ContactContext.Provider value={contact}>
      <ContactUpdateContext.Provider value={setContact}>
        {children}
      </ContactUpdateContext.Provider>
    </ContactContext.Provider>
  );

}
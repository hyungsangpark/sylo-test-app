import React, { ChangeEventHandler } from "react";

import "./CapsuleInputField.css";

interface ICapsuleInputFieldProps {
  value?: string;
  forCurrency?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

function CapsuleInputField({
  value,
  onChange,
  forCurrency,
}: ICapsuleInputFieldProps) {
  const setUnit = (value: string | undefined) => {
    value = value ?? "0 ETH";
    return value.replace(new RegExp("([ ETH]+)"), "") + " ETH";
  };

  return (
    <textarea
      className="capsule-input-field"
      // rows={1}
      value={forCurrency ? setUnit(value) : value}
      onChange={onChange}
    />
  );
}

export default CapsuleInputField;

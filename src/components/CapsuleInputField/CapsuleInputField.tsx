import React, { ChangeEventHandler } from "react";

import "./CapsuleInputField.css";

interface ICapsuleInputFieldProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

function CapsuleInputField({ value, onChange }: ICapsuleInputFieldProps) {
  const setUnit = (value: string | undefined) => {
    value = value ?? "0 ETH";
    return value.replace(new RegExp(` ETH`), "") + " ETH";
  };

  return (
    <input
      className="capsule-input-field"
      type="text"
      value={setUnit(value)}
      onChange={onChange}
    />
  );
}

export default CapsuleInputField;

import React, { ChangeEventHandler, FormEventHandler } from "react";

import "./CapsuleInputField.css";

interface ICapsuleInputFieldProps {
  rows?: number;
  value?: string;
  placeholder?: string;
  forCurrency?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

function CapsuleInputField({
  value,
  placeholder,
  forCurrency,
  rows,
  className,
  onChange,
}: ICapsuleInputFieldProps) {
  const setUnit = (value: string | undefined) => {
    value = value ?? "0 ETH";
    if (value.endsWith(" ET")) value = value.substring(0, value.length - 4);
    return value.replace(new RegExp("([ ETH]+)"), "") + " ETH";
  };

  if (rows === undefined || rows < 2) rows = 1;

  return (rows === 1) ? (
    <input
      className={`capsule-input-field ${className}`}
      type="text"
      value={forCurrency ? setUnit(value) : value}
      placeholder={placeholder}
      onChange={onChange}
    />
  ) : (
    <textarea
      className={`capsule-input-field ${className}`}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  );
}

export default CapsuleInputField;

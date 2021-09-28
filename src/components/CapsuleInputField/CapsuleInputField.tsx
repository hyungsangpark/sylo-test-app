import { ChangeEventHandler } from "react";

import "./CapsuleInputField.css";

interface ICapsuleInputFieldProps {
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
  className,
  onChange,
}: ICapsuleInputFieldProps) {
  const setUnit = (value: string | undefined) => {
    value = value ?? "0 ETH";
    if (value.endsWith(" ET")) value = value.substring(0, value.length - 4);
    return value.replace(new RegExp("([ ETH]+)"), "") + " ETH";
  };

  return (
    <input
      className={`capsule-input-field ${className}`}
      type="text"
      value={forCurrency ? setUnit(value) : value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default CapsuleInputField;

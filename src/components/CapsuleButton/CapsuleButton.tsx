import { ReactNode } from "react";

import "./CapsuleButton.css";

interface ICapsuleButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  color?: string;
  variant?: string;
  disabled?: boolean;
}

function CapsuleButton({
  onClick,
  children,
  color,
  variant,
  disabled,
}: ICapsuleButtonProps) {
  const isOutlinedButton = variant === "outlined";

  color = color ?? "var(--app-orange)"

  const overriddenStyles = {
    backgroundColor: "var(--background-color)",
    borderColor: `${color}`,
    color: `${color}`,
  };

  return (
    <button
      className={"capsule-button" + (disabled ? " disabled" : "")}
      onClick={onClick}
      disabled={disabled}
      color={color}
      style={
        isOutlinedButton
          ? overriddenStyles
          : {
              backgroundColor: `${color}`,
              borderColor: `${color}`,
              color: "white",
            }
      }
    >
      {children}
    </button>
  );
}

export default CapsuleButton;

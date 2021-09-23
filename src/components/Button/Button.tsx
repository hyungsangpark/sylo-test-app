import React, { ReactNode } from "react";
import Colors from "../../assets/Colors";

import "./Button.css";

interface IButtonProps {
  onClick: () => void;
  children?: ReactNode;
  color?: string;
  variant?: string;
}

function Button({ onClick, children, color, variant }: IButtonProps) {
  const isOutlinedButton = variant === "outlined";
  if (color == null) {
    color = Colors.Orange; // Orange Color of the Prototype.
  }

  return (
    <button
      onClick={onClick}
      color={color}
      className="capsule-shape interactive"
      style={{
        backgroundColor: isOutlinedButton ? "white" : color,
        borderColor: `${color}`,
        color: isOutlinedButton ? color : "white",
      }}
    >
      {children}
    </button>
  );
}

export default Button;

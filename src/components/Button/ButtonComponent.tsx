import React from "react";
import { Button as ButtonBs } from "react-bootstrap";

interface ButtonProps {
  label: string;
  style?: object;
  className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  style,
  className,
}) => {
  return (
    <ButtonBs variant="primary" className={className} style={style}>
      {label}
    </ButtonBs>
  );
};

export default ButtonComponent;

import React from "react";
import { Button as ButtonBs } from "flowbite-react";

interface ButtonProps {
  label: string;
  style?: object;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: React.ComponentType;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  style,
  className,
  onClick,
  Icon,
}) => {
  return (
    <ButtonBs className={className} style={style} onClick={onClick}>
      <div>{Icon && <Icon />}</div> <p className="m-0">{label}</p>
    </ButtonBs>
  );
};

export default ButtonComponent;

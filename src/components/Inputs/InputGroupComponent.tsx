import React from "react";
import { Label, TextInput } from "flowbite-react";

interface InputGroupProps {
  id: string;
  label: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classNameParent?: string;
  className?: string;
  classNameLabel?: string;
}

const InputGroupComponent: React.FC<InputGroupProps> = ({
  id,
  label,
  Icon,
  placeholder,
  type,
  value,
  onChange,
  classNameParent,
  className,
  classNameLabel,
}) => {
  return (
    <div className={classNameParent}>
      <div>
        <Label htmlFor={id} value={label} className={classNameLabel} />
      </div>
      <TextInput
        value={value}
        onChange={onChange}
        id={id}
        type={type}
        icon={Icon}
        placeholder={placeholder}
        className={className}
        required
      />
    </div>
  );
};

export default InputGroupComponent;

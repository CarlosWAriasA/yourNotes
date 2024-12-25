import React from "react";
import { Form, InputGroup as InputGroupBs } from "react-bootstrap";

interface InputGroupProps {
  label: string;
  Icon: React.ComponentType;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputGroupComponent: React.FC<InputGroupProps> = ({
  label,
  Icon,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{label}</Form.Label>
      <InputGroupBs className="mb-3">
        <InputGroupBs.Text id="basic-addon1">
          <Icon />
        </InputGroupBs.Text>
        <Form.Control
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
          type={type}
          value={value}
          onChange={onChange}
        />
      </InputGroupBs>
    </Form.Group>
  );
};

export default InputGroupComponent;

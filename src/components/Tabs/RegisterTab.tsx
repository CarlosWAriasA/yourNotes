import { Form } from "react-bootstrap";
import InputGroupComponent from "../Inputs/InputGroupComponent";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";

function RegisterTab() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Form>
      <InputGroupComponent
        label="Email Address"
        Icon={() => <MdOutlineMailOutline />}
        placeholder="Email"
        type="email"
        value={newUser.email}
        onChange={(e) => {
          setNewUser((prev) => ({
            ...prev,
            email: e.target.value,
          }));
        }}
      />
      <InputGroupComponent
        label="Password"
        Icon={() => <TbLockPassword />}
        placeholder="Password"
        type="password"
        value={newUser.password}
        onChange={(e) => {
          setNewUser((prev) => ({
            ...prev,
            password: e.target.value,
          }));
        }}
      />
      <InputGroupComponent
        label="Confirm Password"
        Icon={() => <TbLockPassword />}
        placeholder="Confirm Password"
        type="password"
        value={newUser.confirmPassword}
        onChange={(e) => {
          setNewUser((prev) => ({
            ...prev,
            confirmPassword: e.target.value,
          }));
        }}
      />
      <ButtonComponent label="Register" className="w-full" />
    </Form>
  );
}

export default RegisterTab;

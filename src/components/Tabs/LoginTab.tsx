import { Form } from "react-bootstrap";
import InputGroupComponent from "../Inputs/InputGroupComponent";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";

function LoginTab() {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <Form>
      <InputGroupComponent
        label="Email Address"
        Icon={() => <MdOutlineMailOutline />}
        placeholder="Email"
        type="email"
        value={user.email}
        onChange={(e) => {
          setUser((prev) => ({
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
        value={user.password}
        onChange={(e) => {
          setUser((prev) => ({
            ...prev,
            password: e.target.value,
          }));
        }}
      />
      <ButtonComponent label="Log in" className="w-full" />
    </Form>
  );
}

export default LoginTab;

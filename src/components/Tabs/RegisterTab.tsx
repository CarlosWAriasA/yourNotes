import InputGroupComponent from "../Inputs/InputGroupComponent";
import { MdOutlineMailOutline } from "react-icons/md";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";
import ButtonGoogle from "../Button/ButtonGoogle";
import { RiLockPasswordFill } from "react-icons/ri";

function RegisterTab() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form>
      <InputGroupComponent
        id="email"
        label="Email Address"
        Icon={() => <MdOutlineMailOutline size={20} />}
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
        id="password"
        label="Password"
        Icon={() => <RiLockPasswordFill size={20} />}
        classNameParent="mt-2"
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
        id="confirmPassword"
        label="Confirm Password"
        classNameParent="mt-2"
        Icon={() => <RiLockPasswordFill size={20} />}
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
      <ButtonComponent label="Register" className="w-full mt-3" />
      <p className="text-center mt-2">Or</p>
      <ButtonGoogle />
    </form>
  );
}

export default RegisterTab;

import InputGroupComponent from "../Inputs/InputGroupComponent";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import ButtonComponent from "../Button/ButtonComponent";
import { useState } from "react";
import ButtonGoogle from "../Button/ButtonGoogle";

function LoginTab() {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <form>
      <InputGroupComponent
        id="email"
        label="Email Address"
        classNameLabel="text-white"
        Icon={() => <MdOutlineMailOutline size={20} />}
        placeholder="test@gmail.com"
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
        id="password"
        label="Password"
        Icon={() => <RiLockPasswordFill size={20} />}
        classNameParent="mt-2"
        classNameLabel="text-white"
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
      <ButtonComponent label="Log in" className="w-full mt-3" />
      <p className="text-center mt-2">Or</p>
      <ButtonGoogle />
    </form>
  );
}

export default LoginTab;

import { Button as ButtonBs } from "flowbite-react";
import { useGoogleLogin } from "@react-oauth/google";
import { FaGoogle } from "react-icons/fa";

function ButtonGoogle() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <ButtonBs
      className="w-full bg-white mt-2"
      onClick={() => login()}
      color="light"
    >
      <FaGoogle className="mr-2 h-5 w-5" />
      Sign in with Google
    </ButtonBs>
  );
}

export default ButtonGoogle;

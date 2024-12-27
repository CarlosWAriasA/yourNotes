import { Colors } from "../utils/Colors";
import { Tabs } from "flowbite-react";
import LoginTab from "../components/Tabs/LoginTab";
import RegisterTab from "../components/Tabs/RegisterTab";

function Login() {
  return (
    <main
      className="rounded-md text-white p-3 pt-3 overflow-hidden"
      style={{
        width: "40vw",
        height: "70vh",
        backgroundColor: Colors.NAVBAR,
      }}
    >
      <div className="flex justify-center gap-3 mb-2 ml-2">
        <img
          src="./yourNotes.webp"
          width={40}
          height={30}
          className="rounded-lg"
        />
        <h1 className="font-bold text-3xl">yourNotes</h1>
      </div>
      <Tabs aria-label="Default tabs" variant="underline">
        <Tabs.Item active title="Login" className="no-focus-outline">
          <LoginTab />
        </Tabs.Item>
        <Tabs.Item title="Register">
          <RegisterTab />
        </Tabs.Item>
      </Tabs>
    </main>
  );
}

export default Login;

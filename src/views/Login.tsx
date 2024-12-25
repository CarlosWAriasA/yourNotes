import { Colors } from "../utils/Colors";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import LoginTab from "../components/Tabs/LoginTab";
import RegisterTab from "../components/Tabs/RegisterTab";

function Login() {
  const [key, setKey] = useState("login");

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
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k ?? "login")}
        className="mb-3 mt-3"
        fill
      >
        <Tab eventKey="login" title="Login">
          <LoginTab />
        </Tab>
        <Tab eventKey="register" title="Register">
          <RegisterTab />
        </Tab>
      </Tabs>
    </main>
  );
}

export default Login;

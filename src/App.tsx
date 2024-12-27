import { Flowbite } from "flowbite-react";
import Header from "./components/Header/Header";
import NotasList from "./components/Notes/NotesList";
import { Colors } from "./utils/Colors";
import Login from "./views/Login";

function App() {
  return (
    <Flowbite>
      <div
        className="flex items-center justify-center min-h-screen h-screen"
        style={{ backgroundColor: Colors.MAIN }}
      >
        <Login />
        {/* <main className="w-4/6 h-full overflow-hidden">
          <Header />
          <NotasList />
        </main> */}
      </div>
    </Flowbite>
  );
}

export default App;

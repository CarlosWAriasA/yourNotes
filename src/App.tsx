import Header from "./components/Header/Header";
import NotasList from "./components/Notas/NotesList";
import { Colors } from "./utils/Colors";

function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen h-screen"
      style={{ backgroundColor: Colors.MAIN }}
    >
      <main
        className="w-4/6 h-full overflow-hidden"
        style={{ backgroundColor: Colors.MAIN }}
      >
        <Header />
        <NotasList />
      </main>
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import NotasList from "./components/Notas/NotasList";

function App() {
  return (
    <div
      className="flex items-center justify-center min-h-screen h-screen bg-slate-900"
      style={{ backgroundColor: "#242424" }}
    >
      <main className="bg-gray-200 w-4/6 h-full p-2 rounded-sm overflow-hidden">
        <Header />
        <NotasList />
      </main>
    </div>
  );
}

export default App;

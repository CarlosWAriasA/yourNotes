import Nota from "./Nota";
import { useState } from "react";

function NotasList() {
  const [notas, setNotas] = useState(Array.from({ length: 10 }, (_, i) => i));

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"), 10);
    console.log(event, draggedIndex);
    if (isNaN(draggedIndex)) return;

    const updatedNotas = [...notas];
    const [draggedNota] = updatedNotas.splice(draggedIndex, 1);
    updatedNotas.splice(index, 0, draggedNota);

    setNotas(updatedNotas);
  };

  return (
    <section className="flex flex-col gap-1 mt-2 overflow-auto h-full pb-4 ">
      {notas.map((_, i) => {
        return (
          <Nota
            key={i}
            index={i}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        );
      })}
    </section>
  );
}

export default NotasList;

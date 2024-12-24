import { Colors } from "../../utils/Colors";
import Nota from "./Note";
import { useState } from "react";

function NotasList() {
  const [notas, setNotas] = useState(
    Array.from({ length: 10 }).map((_, i) => ({
      id: i + 1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi veritatis explicabo eos autem reiciendis aliquid quasi, adipisci voluptatibus a voluptas consequatur eum vel debitis porro voluptatem impedit. Incidunt, eligendi corrupti",
      date: new Date().toLocaleString(),
      pin: false,
    }))
  );

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
    console.log(event, draggedIndex, index);
    if (isNaN(draggedIndex)) return;

    const updatedNotas = [...notas];
    [updatedNotas[draggedIndex], updatedNotas[index]] = [
      updatedNotas[index],
      updatedNotas[draggedIndex],
    ];

    setNotas(updatedNotas);
  };

  return (
    <section
      className="flex flex-col gap-1 overflow-auto h-full p-1"
      style={{ backgroundColor: Colors.NAVBAR }}
    >
      {notas
        .sort((a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0))
        .map((note, index) => {
          return (
            <Nota
              key={index}
              index={index}
              note={note}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
              setNotes={setNotas}
            />
          );
        })}
    </section>
  );
}

export default NotasList;

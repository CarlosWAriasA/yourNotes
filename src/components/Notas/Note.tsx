import React from "react";
import { LuPin, LuPinOff } from "react-icons/lu";
import "./Note.css";
import { Colors } from "../../utils/Colors";

interface Note {
  id: number;
  text: string;
  date: string;
  pin: boolean;
}

interface NotaProps {
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Nota: React.FC<NotaProps> = ({
  index,
  onDragStart,
  onDrop,
  note,
  setNotes,
}) => {
  const handlePin = () => {
    setNotes((prev) => {
      const newNotes: Note[] = prev.map((n) => {
        if (n.id === note.id) {
          return {
            ...n,
            pin: !n.pin,
          };
        }
        return n;
      });
      return newNotes;
    });
  };

  return (
    <div
      className="w-full p-2 text-white note rounded-md"
      draggable={true}
      onDragStart={(e) => onDragStart(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="flex justify-end">
        <div className="cursor-pointer" onClick={handlePin}>
          {note.pin ? <LuPinOff size={20} /> : <LuPin size={20} />}
        </div>
      </div>
      <p className="m-0">
        {note.id} {note.text}
      </p>
      <p
        className="m-0 flex justify-end"
        style={{ color: Colors.TEXT_SECONDARY, fontSize: 12 }}
      >
        {note.date}
      </p>
    </div>
  );
};

export default Nota;

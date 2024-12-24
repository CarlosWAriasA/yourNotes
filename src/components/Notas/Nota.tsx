import React from "react";

interface NotaProps {
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
}

const Nota: React.FC<NotaProps> = ({ index, onDragStart, onDrop }) => {
  return (
    <div
      className="w-full bg-slate-600 p-2 rounded-sm text-white cursor-pointer"
      draggable={true}
      onDragStart={(e) => onDragStart(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragOver={(e) => e.preventDefault()}
    >
      {index} Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      perferendis, ratione sint consequuntur perspiciatis commodi quidem! Culpa
      possimus ex ratione repellendus mollitia voluptatum quis perspiciatis,
      maiores quod reiciendis aspernatur! Corporis.
    </div>
  );
};

export default Nota;

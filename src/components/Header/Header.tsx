import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Colors } from "../../utils/Colors";
import "./Header.css";

function Header() {
  const [note, setNote] = useState("");
  const [rows, setRows] = useState(1);
  const maxRows = 4;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.shiftKey) {
        if (rows > 1) {
          setRows(rows - 1);
          setNote(note.slice(0, note.lastIndexOf("\n")));
        }
      } else {
        if (rows < maxRows) {
          setRows(rows + 1);
        }
        setNote(note + "\n");
      }
    }
  };

  return (
    <section
      className="flex justify-center flex-col  text-white p-2"
      style={{ backgroundColor: Colors.NAVBAR }}
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
      <div className="w-full flex justify-center items-center gap-2">
        <Form.Control
          as={"textarea"}
          rows={rows}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Write a note..."
          className="p-2 rounded-lg text-white custom-placeholder flex-grow"
          style={{
            backgroundColor: Colors.INPUT_BG,
            borderColor: Colors.INPUT_BORDER,
          }}
        />
        <Button
          variant="success"
          className="h-full"
          style={{ height: "100%", backgroundColor: Colors.BUTTON_BG }}
        >
          Create
        </Button>
      </div>
    </section>
  );
}

export default Header;

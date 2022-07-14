import React, { useState } from "react";

interface ITodosInputProps {
  onClick: (value: string) => void;
}

const TodoInput = ({ onClick }: ITodosInputProps) => {
  const [text, settext] = useState("");

  const changehandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    settext(e.target.value);
  };

  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick(text);
  };
  return (
    <div>
      <input className="todoinput" type="text" value={text} onChange={changehandle} />
      <button className="btn add" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;

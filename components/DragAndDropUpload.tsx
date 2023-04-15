import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["MP3"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
    console.log({file})
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;
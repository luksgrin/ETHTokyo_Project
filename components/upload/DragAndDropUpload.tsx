import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["MP3"];

function DragDrop() {
  const [file, setFile] = useState(null);

  const getBase64 = (file: any, cb: (result: any) => any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }

  const handleChange = (file: React.SetStateAction<null>) => {
    setFile(file);
    getBase64(file, (base64encoded) => {
        console.log({file, base64encoded});
    })
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;
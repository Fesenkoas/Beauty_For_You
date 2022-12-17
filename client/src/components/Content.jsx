import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase64 from "react-file-base64";
import TextField from "@mui/material/TextField";
import { addItem } from "../features/action/items";

export const Content = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [textRu, setTextRu] = useState("");
  const [textUs, setTextUs] = useState("");
  const [textIl, setTextIl] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");

  const handleClickAdd = () => {
    const newItem = {
      title:{
        ru: title, en: title, il: title
      },
      image,
      text: { ru: textRu, en: textUs, il: textIl },
      price,
      sale,
    };
    dispatch(addItem(newItem));
  };
  const handleClickCancel = () => {
    setTitle("");
    setImage("");
    setTextIl("");
    setTextRu("");
    setTextUs("");
    setPrice("");
    setSale("");
  };

  return (
    <div className="content flex flex-row">
      <form onSubmit={(e) => e.preventDefault()} className=" p-3 basis-1/2">
        <label className="flex flex-col w-full ">
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            margin="normal"
            helperText="Please enter Title"
          />

          <label className="text-gray-300 py2 bg-gray-600 text-xsmt-3 flex items-center justify-center border-2 border-dotted cursor-pointer">
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setImage({ image: base64 })}
            />
          </label>

          <TextField
            label="Russia Text"
            onChange={(e) => setTextRu(e.target.value)}
            value={textRu}
            multiline
            rows={4}
            margin="normal"
            helperText="Please enter text in Russian"
          />
          <TextField
            label="English Text"
            onChange={(e) => setTextUs(e.target.value)}
            value={textUs}
            multiline
            rows={4}
            margin="normal"
            helperText="Please enter text in English"
          />
          <TextField
            label="Hebret Text"
            onChange={(e) => setTextIl(e.target.value)}
            value={textIl}
            multiline
            rows={4}
            margin="normal"
            helperText="Please enter text in Hebret"
          />
          <TextField
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            min="0"
            margin="normal"
            helperText="Please enter Price"
          />
          <TextField
            label="Sale"
            onChange={(e) => setSale(e.target.value)}
            value={sale}
            margin="normal"
            type="number"
            min="0"
            helperText="Please enter Sale"
          />
          <div className="flex gap-8 items-center justify-center mt-4">
            <button
              onClick={handleClickAdd}
              className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
            >
              SAVE
            </button>
            <button
              onClick={handleClickCancel}
              className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4"
            >
              CANCEL
            </button>
          </div>
        </label>
      </form>
      <div className="h-screen p-3 basis-1/4">
        {image && <img src={image.image} alt={image.name} />}
      </div>
    </div>
  );
};

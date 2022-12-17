import React from "react";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/action/itemsSlice";

export const Table = ({ item, id }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    console.log("update" + item._id);
  };
  const handleDelete = () => {
  
    try {
      dispatch(deleteItem({id:item._id}));
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <tbody className="hover:bg-sky-200">
      <tr className="border-black border-solid border-2">
        <td className=" border-black border-solid border-r-2 p-2">{id}</td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.title.ru}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.title.en}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.title.il}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.text.ru}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.text.en}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.text.il}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.price}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          {item.sale}
        </td>
        <td className=" border-black border-solid border-r-2 p-2">
          <img className=" w-12" src={item.image.image} alt={item.image} />
        </td>
        <td className=" p-5 flex flex-row">
          <BsTrash onClick={handleDelete} />{" "}
          <BsPencilSquare onClick={handleUpdate} />
        </td>
      </tr>
    </tbody>
  );
};

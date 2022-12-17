import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from '../redux/action/itemsSlice'
import { Table } from "./Table";

export const ListItems = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);
  return (
    <div className="content flex flex-col">
      <div className="p-3 text-2xl">Post</div>
      <div className=" ">
        <table className="m-5 ">
          <thead className="border-black border-solid border-2">
            <tr>
              <td className="h-4 w-10 border-black border-solid border-r-2 p-2">
                id
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Title RU
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Title EN
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Title IL
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Text RU
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Text EN
              </td>
              <td className="h-4 w-56 border-black border-solid border-r-2 p-2">
                Text IL
              </td>
              <td className="h-4 w-20 border-black border-solid border-r-2 p-2">
                Price
              </td>
              <td className="h-4 w-20 border-black border-solid border-r-2 p-2">
                Sale
              </td>
              <td className="h-4 w-18 border-black border-solid border-r-2 p-2">
                Image
              </td>
              <td className="h-4 w-20 p-2">Action</td>
            </tr>
          </thead>
          {items.map((item, key) => (
            <Table item={item} key={key} id={key+1} />
          ))}
        </table>
      </div>
    </div>
  );
};

const baseURL = "http://localhost:3002/item";

export const addItem = async (newItem) => {
  const res = await fetch(`${baseURL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
   const data = await res.json();
   return data;
};
import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://secure-reef-15878.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [inventories]);
  return [inventories, setInventories];
};
export default useInventories;

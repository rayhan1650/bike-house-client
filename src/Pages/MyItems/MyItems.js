import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myItems, setMyItems] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventories?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, []);
  return (
    <div className="myItems">
      <h2>MyItems {myItems[0]?.name}</h2>
    </div>
  );
};

export default MyItems;

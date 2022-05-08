import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/inventories?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
  }, []);
  return (
    <div className="container myItems my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">My Items</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {myItems.length
          ? myItems.map((myItem) => <MyItem key={myItem._id} myItem={myItem} />)
          : "You have no items."}
      </div>
    </div>
  );
};

export default MyItems;

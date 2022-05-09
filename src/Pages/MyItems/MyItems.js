import React, { useEffect, useState } from "react";
import "./MyItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItem from "../MyItem/MyItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const url = `https://secure-reef-15878.herokuapp.com/myitems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [myItems]);
  return (
    <div className="container myItems my-5">
      <h2 className="text-center mb-4 text-primary fw-bold">My Items</h2>

      {myItems.length ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {myItems.map((myItem) => (
            <MyItem key={myItem._id} myItem={myItem} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h4>You have no items!!</h4>
          <h4>Please add new item.</h4>
        </div>
      )}
    </div>
  );
};

export default MyItems;

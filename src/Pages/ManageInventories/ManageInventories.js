import React from "react";
import useInventories from "../../hooks/useInventories";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const ManageInventories = () => {
  const [inventories, setInventories] = useInventories();
  if (!inventories.length) {
    return <Loading />;
  }

  const handleItemDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      console.log("delete", id);
      const url = `https://secure-reef-15878.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("Delete successful.");
          }
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-center text-primary mt-5">Manage Inventories</h2>
      <div className="text-center my-3">
        <Link className="btn btn-outline-success" to="/additem">
          Add New Item
        </Link>
      </div>

      <div className="table-responsive-sm">
        <table className="table table-bordered border-dark table-striped table-success">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              <tr key={inventory._id}>
                <td>{inventory.name}</td>
                <td>${inventory.price}</td>
                <td>{inventory.quantity}</td>
                <td>
                  <button
                    onClick={() => handleItemDelete(inventory._id)}
                    title="Click here to delete this item."
                    className="border-0 rounded-circle btn btn-outline-light"
                  >
                    <MdDelete className="text-danger fs-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageInventories;

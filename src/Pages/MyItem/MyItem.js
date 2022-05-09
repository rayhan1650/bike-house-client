import React from "react";

const MyItem = ({ myItem }) => {
  const { img, price, name, description, _id, quantity, supplier } = myItem;

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
    <div className="col ">
      <div className="card rounded-3 shadow h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{name}</h4>
          <span className="badge bg-success fs-4 text-start">
            Price: ${price}
          </span>
          <h5 className="mt-3">Quantity: {quantity}</h5>
          <h5>Supplier: {supplier}</h5>
          <p className="card-text my-text-justify my-2">
            {description.length > 250
              ? `${description.slice(0, 249)} ....`
              : description}
          </p>

          <button
            onClick={() => handleItemDelete(_id)}
            className="btn btn-primary mt-auto"
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyItem;

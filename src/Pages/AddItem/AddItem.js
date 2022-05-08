import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const url = `http://localhost:5000/inventories`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        alert("Item added successfully.");
      });
  };
  return (
    <div className=" container ">
      <h2 className="text-center mt-3 text-primary">AddItem</h2>
      <form
        className="d-flex flex-column my-addItem mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="my-2"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name?.type === "required" && "Name is required"}
        <input
          value={user.email}
          type="email"
          {...register("email", { required: true })}
        />
        <input
          className="my-2"
          placeholder="ImageURL"
          {...register("img", { required: true })}
        />
        {errors.img?.type === "required" && "ImageUrl is required"}
        <input
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        {errors.price?.type === "required" && "Price is required"}
        <input
          className="my-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        {errors.quantity?.type === "required" && "Quantity is required"}
        <input
          placeholder="Supplier"
          {...register("supplier", { required: true })}
        />
        {errors.supplier?.type === "required" && "Supplier is required"}
        <textarea
          className="my-2"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description?.type === "required" && "Description is required"}
        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add item"
        />
      </form>
    </div>
  );
};

export default AddItem;

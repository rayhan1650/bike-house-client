import React from "react";
import { useForm } from "react-hook-form";
import "./AddItem.css";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" container ">
      <h2 className="text-center mt-3 text-primary">AddItem</h2>
      <form
        className="d-flex flex-column my-addItem mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input placeholder="Name" {...register("name", { required: true })} />
        <input
          className="my-2"
          placeholder="ImageURL"
          {...register("img", { required: true })}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input
          className="my-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input placeholder="Supplier" {...register("supplier")} />
        <textarea
          className="my-2"
          placeholder="Description"
          {...register("description")}
        />
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

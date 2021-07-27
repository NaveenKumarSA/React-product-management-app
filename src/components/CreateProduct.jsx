import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function CreateProduct({ ...props }) {
  /* submit event handle */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
 console.log("create data", data)
  props.handleCreateAction(data)
};
  return (
    <div>
      {props.isReady && (
        <>
          <div className="container display-5">
            <p>Create Product</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Product Name */}
            <div className="form-group text-start m-2">
              <label for="exampleInputEmail1">Product Name :</label>
              <br />

              <input
                type="text"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Please write what the coustemer wants to see..."
                {...register("prod_Name")}
              />
            </div>
            {/* upload Image */}
            <div className="form-group  text-start m-2 ">
              <label for="exampleFormControlFile1">Upload Image :</label>
              <br />

              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                {...register("prod_Image")}
              />
            </div>
            {/* upload description */}
            <div className="form-group text-start m-2">
              <label for="update_prod_description">Description :</label>
              <br />

              <textarea
                type="text"
                required
                className="form-control"
                id="update_prod_description"
                placeholder="Please write what the coustemer wants to see..."
                {...register("prod_desc")}
              ></textarea>
            </div>
            <br />
            {/* submit */}
            <div className="form-group text-center m-2">
              <button type="submit" className="btn btn-primary list-name">
                Create
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

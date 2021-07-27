import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function UpdateProduct({ ...props }) {
    /* submit event handle */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{ 
      console.log("update component", data)
      props.handleUpdateAction(data)
};
  /* assign product event */
  const [product, setproduct] = useState({});
  useEffect(() => {
    setproduct(props.prod);
    console.log("product", product)
    return () => {
      setproduct({});
    };
  }, []);
  return (
    <div>
      {props.isReady && (
        <>
            <div className="container display-5">
                <p>Update Product</p>
            </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Product Name */}
            <div className="form-group text-start m-2">
              <label for="exampleInputEmail1">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Please write what the coustemer wants to see..."
                defaultValue={product.name}
                {...register("prod_Name")}
              />
            </div>
            {/* upload Image */}
            <div className="form-group  text-start m-2">
              <label for="exampleFormControlFile1">Upload Image</label>
              <br/>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                defaultValue={product.image}
                {...register("prod_Image")}
              />
            </div>
            {/* upload description */}
            <div className="form-group text-start m-2">
              <label for="update_prod_description">Description</label>
              <textarea 
                type="text"
                className="form-control"
                id="update_prod_description"
                defaultValue={product.description}
                placeholder="Please write what the coustemer wants to see..."
                {...register("prod_desc")}
              ></textarea>
            </div>
            {/* submit */}
            <div className="form-group text-center m-2">
              <button type="submit" className="btn btn-primary list-name">
                Update
              </button>
            </div>
          </form>
        
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function ViewProduct({ ...props }) {
  const [product, setproduct] = useState({});
  useEffect(() => {
    setproduct(props.prod);
    return () => {
      setproduct({});
    };
  }, []);
  return (
    <div>
      {props.isReady && (
        <>
          {/* top container */}
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="container list-name text-start ">
                  {" "}
                  <div className="span list-name">Product Name : </div>
                  {product.name}
                </div>
              </div>
              <div className="col-4">
                <img weight="100px" height="100px" 
                          src={product.image !== undefined ? product.image :"https://thumbs.dreamstime.com/b/temporary-rubber-stamp-temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-101635723.jpg"}
                          alt="" />
              </div>
            </div>
          </div>
          {/* middle container */}
          <div className="container align-middle text-wrap text-start m-3">
            <div className="span list-name">Description : </div>
            {product.description}
          </div>
          {/* bottom container */}
          <div className="container m-3">
            <div className="row">
              <div className="col text-start">
                <div className="span list-name">Created at : </div>{" "}
                {product.created_at}
              </div>
              <div className="col text-start">
                <div className="span list-name">Updated at : </div>{" "}
                {product.updated_at}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

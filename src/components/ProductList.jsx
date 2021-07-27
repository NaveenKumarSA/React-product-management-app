import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
export default function ProductList({ ...props }) {
  // console.log("props", props);
  const [product_list, setProduct_list] = useState();
  const [isProductListReady, setisProductListReady] = useState(false);

  useEffect(() => {
    setProduct_list(props.prod_obj);
    setTimeout(() => {
      setisProductListReady(true);
      console.log("product_list", product_list);
    }, 2000);
    return () => {
      setisProductListReady(false);
    };
  }, []);

  return (
    <div className="ml-4">
      <section>
        <div className="container text-end">
          <button className="btn btn-outline btn-outline-secondary" onClick={()=>props.handleCreate()}>
            {" "}
            <AddIcon /> Create
          </button>
        </div>
      </section>
      {isProductListReady && (
        <section>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
                <th scope="col">Created </th>
                <th scope="col">Updated </th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {product_list.map((item, key) => {
                return (
                  <tr className="list-row">
                    <th scope="row">{key + 1} </th>
                    <td className="list-name justify-center">
                      <div className="container list-description-container">
                        {item.name}
                      </div>
                    </td>
                    <td className="list-desc">
                      <div className="container list-description-container">
                        {item.description}
                      </div>
                    </td>
                    <td className="list-image">
                      <div className="container">
                        <img
                          width="75px"
                          height="75px"
                          src={item.image !== undefined ? item.image :"https://thumbs.dreamstime.com/b/temporary-rubber-stamp-temporary-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-101635723.jpg"}
                          alt={item.name}
                        />
                      </div>
                    </td>
                    <td className="created-at list-desc">
                      <div className="container list-description-container">
                        {item.created_at}
                      </div>
                    </td>
                    <td className="updated-at list-desc">
                      <div className="container list-description-container">
                        {item.updated_at}
                      </div>
                    </td>
                    <td>
                      <button
                        className=" btn btn-info text-white"
                        onClick={() => props.handleUpdate(item)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className=" btn btn-danger text-white"
                        onClick={() => props.handleView(item)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

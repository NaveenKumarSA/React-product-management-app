import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios from "axios";
import { Grid } from "@material-ui/core";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { Skeleton } from "@material-ui/lab";
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";
import CreateProduct from "./components/CreateProduct";

function MainApp() {
  const [time, settime] = useState(Date().split("GMT"));
  const [prod_obj, setprod_obj] = useState({});
  const [islist_ready, setislist_ready] = useState(false);
  const [view_product, setview_product] = useState({});
  const [is_view_product, setis_view_product] = useState(false);
  const [update_product, setupdate_product] = useState({});
  const [is_update_product, setis_update_product] = useState(false);
  const [is_create_product, setis_create_product] = useState(false);
  useEffect(() => {
    axios
      .get("data/product_list.json")
      .then((res) => {
        //console.log(res.data);
        setprod_obj(res.data);
      })
      .then(() => {
        setislist_ready(true);
      });
  }, []);

  /* to open the handle view prods div  */
  const handleView = (prod) => {
    setis_create_product(false);
    setis_update_product(false);
    setis_view_product(false);
    setview_product(prod);
    setTimeout(() => {
      setis_view_product(true);
    }, 1000);
  };

  /* to open the update prod div  */
  const handleUpdate = (prod) => {
    setis_create_product(false);
    setis_update_product(false);
    setis_view_product(false);
    setupdate_product(prod);
    setTimeout(() => {
      setis_update_product(true);
    }, 1000);
  };
  /* to open the create prod div  */
  const handleCreate = () => {
    setis_create_product(false);
    setis_update_product(false);
    setis_view_product(false);
    setTimeout(() => {
      setis_create_product(true);
    }, 1000);
  };
  /* handle the create action  */
  const handleCreateAction = (prod) => {
    /* create new object and assign the values from the args  */
    var updateProduct = {
      id: `${Math.round(Math.random() * 100)}`,
      name: prod.prod_Name,
      image: prod.prod_Image.name,
      description: prod.prod_desc,
      created_at: time[0],
      updated_at: time[0],
    };
    /* creating a new array and add the element in the last in the existing array */
    const updated = prod_obj.list_items;
    updated.push(updateProduct);
    /* assign the updated array in prod_obj */
    setprod_obj({ list_items: updated });
    /* for component reload */
    setislist_ready(false);
    setTimeout(() => {
      setislist_ready(true);
      setis_create_product(false);
    }, 500);
  };
  /* handle the create action  */
  const handleUpdateAction = (prod) => {
    /* create new object and assign the values from the args  */
    console.log("handle Update prod", prod);
    console.log("update_product", update_product);
    var updateProduct = {
      id: update_product.id,
      name: prod.prod_Name === "" ? update_product.name : prod.prod_Name,
      image:
        update_product.image === prod.prod_Image.name
          ? update_product.image
          : prod.prod_Image.name,
      description:
        prod.prod_desc === "" ? update_product.description : prod.prod_desc,
      created_at: update_product.created_at,
      updated_at: time[0],
    };

    var updated = prod_obj.list_items;
    var elementIndex = prod_obj.list_items.indexOf(update_product);

    if (elementIndex !== -1) updated[elementIndex] = updateProduct;

    setprod_obj({ list_items: updated });
    setislist_ready(false);
    setTimeout(() => {}, 500);
    setislist_ready(true);
    setis_update_product(false);
  };

  return (
    <div className="App">
      <div className="container text-center display-3 mt-4">
        <p className="title-text">
          Product
          <span className="text-danger">
            <AllInclusiveIcon />
          </span>
          Management
        </p>
      </div>
      <Grid container className="mt-3">
        <Grid item xs={12} sm={12} md={7} className="p-4">
          {!islist_ready && <Skeleton />}
          {!islist_ready && <Skeleton />}
          {!islist_ready && <Skeleton />}
          {!islist_ready && <Skeleton />}
          {!islist_ready && <Skeleton />}
          {islist_ready && (
            <ProductList
              prod_obj={prod_obj.list_items}
              handleView={handleView}
              handleUpdate={handleUpdate}
              handleCreate={handleCreate}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={5} className="p-4">
          {is_view_product && (
            <ViewProduct prod={view_product} isReady={is_view_product} />
          )}
          {is_update_product && (
            <UpdateProduct
              prod={update_product}
              isReady={is_update_product}
              handleUpdateAction={handleUpdateAction}
            />
          )}
          {is_create_product && (
            <CreateProduct
              isReady={true}
              handleCreateAction={handleCreateAction}
            />
          )}
        </Grid>
      </Grid>
      <div className="container">
        <p>
          Note: Kind info, as this project is functioning without any server.
          You may not able to see the picture you uploaded
        </p>
      </div>
      <div className="container-fluid mb-4">
        Copyrights@{" "}
        <span>
          {" "}
          <a href="http://github.com/NaveenKumarSA/React-product-management-app">
            {" "}
            Naveen Kumar SA ( github Repo link )
          </a>{" "}
        </span>
      </div>
    </div>
  );
}

export default MainApp;

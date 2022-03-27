import React, { useState, useEffect } from "react";
import { Link,Redirect } from "react-router-dom";
import Rating from "../components/Rating";
const fetch = require('node-fetch');
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [addtocart,setCartState] = useState(false);
  const [hasError, setError] = useState(false);
  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products/", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    res
      .json()
      .then((res) => {
        console.log(res);
        setProducts(res);
        setCartState(false)
      })
      .catch((error) => {
        setError(error);
      });
  }
  async function addToCart(id, quantity) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        // method: "POST",
        // body: JSON.stringify({
        //   productId: id,
        //   quantity: quantity,
        // }),
        method:"GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let data = await response.json();
      // alert("Item Added To Cart");
      let tempArray = [];
      tempArray.push(data);
      setProducts(tempArray);
      setCartState(true)
      console.log(data);
    } catch (err) {
      alert("Something Went Wrong");
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <main>
      <section>
        <div className="banner-innerpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center text-center">
                <h1 className="title">Amazon</h1>
                {addtocart?null:<h6 className="subtitle op-8">
                 List Of Products
                </h6>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  {products.map((product, i) => (
                    <React.Fragment>
                    <div className="col-lg-4">
                      <div className="card shop-hover border-0">
                        <img
                          src={product.image}
                          alt="wrapkit"
                          className="img-fluid"
                        />
                        {addtocart?null:
                        <div className="card-img-overlay align-items-center">
                          <button
                            onClick={(e) => addToCart(product.id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Add to cart
                          </button>
                        </div>}
                      </div>
                      <div className="card border-0">
                        <h6>
                          <a href="#" className="link" onClick={(e)=>{e.preventDefault();addToCart(product.id, 1);}}>
                            {product.title}{" "}
                          </a>
                        </h6>
                        <h6 className="subtitle">{}</h6>
                        <h5 className="font-medium m-b-30">
                        &#8377;&nbsp;{product.price} {" "}
                        
                          {/* <del className="text-muted line-through">{product.description}</del> */}
                          {addtocart?<React.Fragment>
                        <button
                            onClick={(e) => addToCart(product.id, 1)}
                            className="btn btn-md btn-info"
                          >
                            Buy Now
                          </button>&nbsp;
                           <button
                           onClick={(e) =>  fetchData()}
                           className="btn btn-md btn-info"
                         >
                           Cancel
                         </button></React.Fragment>:null
                        }
                        {/* {addtocart? */}
                        <React.Fragment>
                        <br/>
                        <Rating rating={product.rating.rate}/>
                        </React.Fragment>
                        {/* :null} */}
                        </h5>
                      </div>
                    </div>
                    {addtocart?
                    <div className="col-lg-4">
                      <h6>{product.description}</h6>
                    </div>:<React.Fragment/>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
import "./App.css";
import React, { useState } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

const CollectionAll = () => {
  return (
    <div>
      <div className="category-bar">
        <div className="category-bar-1">
          <img
            className="category-bar-img"
            src="https://mohawkarmynavy.com/wp-content/uploads/2019/11/carhartt-coats.png"
          />
        </div>
        <div className="category-bar-2">
          <div>
            <img
              className="category-bar-img"
              src="https://mohawkarmynavy.com/wp-content/uploads/2019/11/carhartt-coats.png"
            />
          </div>
        </div>
      </div>
      <div className="filter-bar">
        <div>MEN</div>
        <div>FILTER</div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
          <div className="col-md-4">
            <img
              src="https://garden.spoonflower.com/c/4960880/p/f/l/zgibOqm5gf5vRJDM_tvDNz5x-K2t_S0Lbo4kGtqSxcK7xLfn6Ak/Carolina%20Blue%20Solid.jpg"
              width="100%"
              className="product-img"
            />
            <h4>상품명</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionAll;

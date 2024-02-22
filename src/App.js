import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import HiddenBar from "./HiddenBar";
import CollectionAll from "./CollectionAll";
import Footer from "./Footer";
import CareService from "./CareService";

function App() {
  return (
    <div className="App">
      <div className="space"></div>
      <Navbar />
      <HiddenBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="image-container">
                <video autoPlay loop muted>
                  <source src="shoes.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="bottom-left">
                  <p className="main-image-title">DOBLUE</p>
                  <p className="main-image-description">
                    EXPLORE, RESTORE, ENCORE.{" "}
                  </p>
                </div>
              </div>

              <div className="main-page-description">
                <div className="main-page-description-text">
                  <h2>DOBLUE</h2>
                  <p>[dəbluː]</p>{" "}
                  <p>
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION{" "}
                  </p>
                </div>
                <img
                  className="main-page-description-img"
                  src="logo512.png"
                ></img>
              </div>

              <div className="doblue-info">
                <div className="image-container">
                  {" "}
                  <img src="banner1.png" />
                  <p className="bottom-left doblue-info-description">DOBLUE</p>
                </div>
                <div className="image-container">
                  {" "}
                  <img src="banner2.png" />
                  <p className="bottom-left doblue-info-description">BUY</p>
                </div>
                <div className="image-container">
                  {" "}
                  <img src="banner3.png" />
                  <p className="bottom-left doblue-info-description">
                    SELL/TRADE
                  </p>
                </div>
              </div>

              <Link to={"/collection/all"}>
                <Button variant="outline-info" className="more-button">
                  View All
                </Button>{" "}
              </Link>
            </div>
          }
        />
        <Route path="/cart" element={<div>cart</div>}></Route>
        <Route path="/doblue-service" element={<div>subscription</div>}></Route>
        <Route path="/subscription" element={<div>subscription</div>}></Route>
        <Route path="/sell-trade" element={<div>subscription</div>}></Route>
        <Route path="/collection">
          <Route path="all" element={<CareService />} />
          <Route path="men" element={<CollectionAll />} />
          <Route path="women" element={<CollectionAll />} />
          <Route path="gs" element={<CollectionAll />} />
        </Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

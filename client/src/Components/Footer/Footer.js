import React, { useState, useEffect } from "react";
import "./style.css";

const Footer = (props) => {
  const [beastSighting, setBeastSighting] = useState("");

  useEffect(() => {
    fetch(
      "https://opendata.arcgis.com/datasets/9947fc49e6c44120b4a1b3133c073dbc_0.geojson"
    )
      .then((blob) => {
        return blob.json();
      })
      .then((res) => {
        let randomNumber = Math.floor(Math.random() * res.features.length) - 1;

        setBeastSighting(res.features[randomNumber].properties.descriptio);
      });
  }, []);

  return (
    <div className="d-flex-column justify-content-center mb-3 mt-2">
      <div className="text-center border-bottom">boilerplate</div>

      <div className="text-center">
        <small>
          © 2021 Pendergast, de Uriarte, & MoDavis All Rights Reserved
        </small>
      </div>
      <div className="text-center ">
        <small> -------- in other news
        --------</small>
      </div>
      <div className="text-center beast mt-1">
        <small>-bigfoot sighting: {beastSighting}-</small>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Map, { Marker } from 'react-map-gl';
import "../../assets/style/section-trajet.css"

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmF0aGFuYWNjZW50dXJlIiwiYSI6ImNrN2RoZmxvaDA5dGczbG55NDM5N3dhN28ifQ.mHEPYdUr7DFv69toEjZxOQ'; // Set your mapbox token here


// core components

function TrajetCompose() {
  return (
    <section id="section-trajet">
      <article>
        <div>
        <Map
            initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 14
            }}
            style={{ width: "40vw", height: "60vh" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
          />
        </div>
        <div>
          <h2>Notre trajet</h2><br /><br /><br />
          <p>Le tracé du trajet arrivera prochainement!</p>
        </div>
      </article>
    </section >

  );
}

export default TrajetCompose;

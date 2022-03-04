import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import "../../assets/style/section-trajet.css"

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aGFuYWNjZW50dXJlIiwiYSI6ImNrN2RoZmxvaDA5dGczbG55NDM5N3dhN28ifQ.mHEPYdUr7DFv69toEjZxOQ';

function TrajetCompose() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(4.579);
  const [lat, setLat] = useState(50.7157);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new mapboxgl.NavigationControl());
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <section id="section-trajet">
      
      <article>
        <div ref={mapContainer} className="map-container" />
      </article>
      <article> 
        <div>
          <h2>Le trajet</h2><br /><br /><br />
          <p>Le tracé du trajet arrivera prochainement!</p>
        </div>
      </article>
    </section>
  );
}

export default TrajetCompose;

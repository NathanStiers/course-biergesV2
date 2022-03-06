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
    new mapboxgl.Marker({color: "#ff5757",}).setLngLat([4.579, 50.7157]).setPopup(new mapboxgl.Popup().setHTML("<p>Départ et arrivée de la course !<p>")).addTo(map.current);
    map.current.on('load', function() {
      map.current.addSource('route', {
          'type': 'geojson',
          'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                  'type': 'LineString',
                  'coordinates': [
                    [
                      4.579582214355469,
                      50.715760962627954
                    ],
                    [
                      4.582264423370361,
                      50.71169168587333
                    ],
                    [
                      4.583219289779663,
                      50.71178000447811
                    ],
                    [
                      4.58804726600647,
                      50.71110062631218
                    ],
                    [
                      4.590193033218384,
                      50.71141314149139
                    ],
                    [
                      4.593755006790161,
                      50.710876429356716
                    ],
                    [
                      4.596211910247803,
                      50.711426729060626
                    ],
                    [
                      4.597059488296509,
                      50.71201778451003
                    ],
                    [
                      4.597553014755249,
                      50.71217403930287
                    ],
                    [
                      4.597982168197632,
                      50.712228388673914
                    ],
                    [
                      4.5985400676727295,
                      50.71216045195025
                    ],
                    [
                      4.599162340164185,
                      50.71192267264199
                    ],
                    [
                      4.600471258163452,
                      50.71305720877479
                    ],
                    [
                      4.600975513458252,
                      50.713206666577655
                    ],
                    [
                      4.600943326950073,
                      50.713322156371625
                    ],
                    [
                      4.6012115478515625,
                      50.713491993787045
                    ],
                    [
                      4.600954055786133,
                      50.713587102470896
                    ],
                    [
                      4.60077166557312,
                      50.71400150234108
                    ],
                    [
                      4.6014368534088135,
                      50.714653665208736
                    ],
                    [
                      4.601469039916992,
                      50.71481670450783
                    ],
                    [
                      4.6011364459991455,
                      50.71490501722472
                    ],
                    [
                      4.599409103393555,
                      50.71504767587742
                    ],
                    [
                      4.598046541213989,
                      50.71491181050376
                    ],
                    [
                      4.595729112625122,
                      50.714517798692924
                    ],
                    [
                      4.590879678726196,
                      50.71629082575854
                    ],
                    [
                      4.590579271316527,
                      50.7162161018337
                    ],
                    [
                      4.589688777923584,
                      50.715326198662275
                    ],
                    [
                      4.586716890335083,
                      50.71491181050376
                    ],
                    [
                      4.585011005401611,
                      50.71476235813781
                    ],
                    [
                      4.583272933959961,
                      50.714898223944715
                    ],
                    [
                      4.582446813583374,
                      50.7145381786954
                    ],
                    [
                      4.58055853843689,
                      50.71612779158714
                    ],
                    [
                      4.578981399536133,
                      50.71696333572101
                    ],
                    [
                      4.579442739486694,
                      50.71600551558642
                    ],
                    [
                      4.577661752700806,
                      50.715557167521176
                    ]
                  ]
              }
          }
      });
      map.current.addLayer({
          'id': 'route',
          'type': 'line',
          'source': 'route',
          'layout': {
              'line-join': 'round',
              'line-cap': 'round'
          },
          'paint': {
              'line-color': '#30a17d',
              'line-width': 5
          }
      });
  });
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
        <a className='btn'>Je veux m'inscrire!</a>  <br></br>
         
      </article>
      
    </section>
  );
}

export default TrajetCompose;

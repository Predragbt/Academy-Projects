import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { fromLonLat } from "ol/proj";

export const CustomMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);
  useEffect(() => {
    if (mapInstance.current) {
      // Prevent reinitialization of the map
      return;
    }

    if (mapRef.current) {
      // Initialize the OpenLayers map
      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([6.939098, 50.939563]),
          zoom: 15,
        }),
      });

      const marker = new Feature({
        geometry: new Point(fromLonLat([6.939098, 50.939563])),
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            scale: 0.1, // Scale the icon
          }),
        })
      );

      const vectorSource = new VectorSource({
        features: [marker],
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });

      mapInstance.current.addLayer(vectorLayer);
    }
  }, []);

  return <div ref={mapRef} className="w-[240px] h-[180px]  ms-8"></div>;
};

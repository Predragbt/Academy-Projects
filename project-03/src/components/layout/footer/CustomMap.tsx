import { useEffect, useRef, useState } from "react";
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
import { useAppContext } from "../../../context/AppContext";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Location {
  name: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  coordinates: Coordinates;
}

interface FooterMapLocations {
  eng: Location;
  mk: Location;
}

export const CustomMap = () => {
  const [locations, setLocations] = useState<FooterMapLocations | null>(null);
  const { language } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<Map | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "http://localhost:5000/footerMapLocations"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch locations: ${response.statusText}`);
        }
        const data: FooterMapLocations = await response.json();
        setLocations(data);
      } catch (err) {
        setError("Error fetching locations");
        console.error("Error fetching locations:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, [language]);

  useEffect(() => {
    if (!mapRef.current || !locations || mapInstance.current) return;

    // Initialize the OpenLayers map
    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([
          locations[language as keyof FooterMapLocations].coordinates.longitude,
          locations[language as keyof FooterMapLocations].coordinates.latitude,
        ]),
        zoom: 15,
      }),
    });

    // Add a marker
    const marker = new Feature({
      geometry: new Point(
        fromLonLat([
          locations[language as keyof FooterMapLocations].coordinates.longitude,
          locations[language as keyof FooterMapLocations].coordinates.latitude,
        ])
      ),
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
  }, [locations, language]);

  if (loading) return <div>Loading map...</div>;
  if (error) return <div>{error}</div>;
  if (!locations) return <div>No locations found</div>;

  return (
    <div className="ms-8 flex flex-col w-[240px]">
      <div ref={mapRef} className="h-[180px]"></div>;
      <div>
        <p className="text-white mb-4 text-[12px]">
          <img
            src="/assets/icons/FooterLocationIcon.png"
            alt="Location Icon"
            className="inline me-4"
          />
          <span>{locations[language as keyof FooterMapLocations].city}, </span>
          <span>{locations[language as keyof FooterMapLocations].country}</span>
        </p>
        <p className="text-white mb-4 text-[12px]">
          <img
            src="/assets/icons/FooterPhoneIcon.png"
            alt="Phone Icon"
            className="inline me-4"
          />
          {locations[language as keyof FooterMapLocations].phoneNumber}
        </p>
        <p className="text-white mb-4 text-[12px]">
          <img
            src="/assets/icons/FooterEmailIcon.png"
            alt="Email Icon"
            className="inline me-4"
          />
          {locations[language as keyof FooterMapLocations].email}
        </p>
      </div>
    </div>
  );
};

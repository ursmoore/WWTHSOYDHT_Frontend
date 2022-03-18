import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const MapHandler = () => {
  const map = useMapEvents({
    click: (e) => console.log(e.latlng),
  });
  return null;
};

const location = [52.3881519, 4.8217855];

const CreateMarker = () => {
  return (
    <>
      <MapContainer
        style={{
          height: "40vw",
          width: "50vw",
          maxWidth: "1000px",
          maxHeight: "800px",
          margin: "0px 19.5%",
        }}
        center={location}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapHandler />
        {/* <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
};

export default CreateMarker;

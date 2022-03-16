import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const SimpleMap = () => {
  return (
    <>
      <MapContainer
        style={{
          // border: "2px solid",
          // borderRadius: "10px",
          height: "40vw",
          width: "50vw",
          maxWidth: "1000px",
          maxHeight: "800px",
          margin: "0px 19.5%",
        }}
        center={[52.36994, 4.906]}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.3881519, 4.8217855]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default SimpleMap;

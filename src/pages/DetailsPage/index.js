import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchLocationById } from "../../store/locations/actions";
import { selectLocationDetails } from "../../store/locations/selectors";
import { updateDislikes } from "../../store/locations/actions";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard";
import CommentForm from "../../components/CommentForm";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const details = useSelector(selectLocationDetails);

  useEffect(() => {
    dispatch(fetchLocationById(id));
  }, [dispatch, id]);
  console.log("details", details);

  if (!details) return <div>Loading....</div>;

  const ChangeMapView = ({ coords }) => {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  };

  const {
    name,
    description,
    image,
    dislikes,
    experience,
    latitude,
    longtitude,
  } = details;

  return (
    <div>
      <>
        <h1>{name}</h1>
        <MapContainer
          style={{
            height: "60vw",
            width: "60vw",
            maxWidth: "1000px",
            maxHeight: "800px",
            margin: "0px 19.5%",
          }}
          center={[latitude, longtitude]}
          zoom={8}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeMapView coords={[latitude, longtitude]} />
          <Marker position={[latitude, longtitude]}>
            <Popup>
              {description} <br /> {experience} <br />{" "}
              <img src={image} alt={name} width={300} />
            </Popup>
          </Marker>
        </MapContainer>
      </>

      {/* <h3>{description}</h3>
      <img src={image} alt={name} width={600} /> */}

      {/* <h3>{description}</h3> */}
      {/* <img src={image} alt={name} width={600} /> */}
      <div>
        <br />
        <CommentForm />
        {details.comments.length > 0 &&
          details.comments.map((comment, index) => {
            return (
              <CommentCard
                key={index}
                id={comment.id}
                text={comment.text}
                comment={comment.comment}
                userName={comment.userName}
                createdAt={comment.createdAt}
              />
            );
          })}
        <div>
          <p>???? - {dislikes}</p>
          <button
            onClick={() => {
              dispatch(updateDislikes(id, dislikes + 1));
            }}
          >
            Thumps down
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

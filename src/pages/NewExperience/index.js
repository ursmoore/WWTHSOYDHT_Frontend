import CreateMarker from "../../components/CreateMarker";

import { useDispatch, useSelector } from "react-redux";
import { newExperiencePosted } from "../../store/locations/actions";
import { selectUser } from "../../store/user/selectors";
import { useState } from "react";
import { selectOnClickMarker } from "../../store/locations/selectors";

const NewExperience = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const coords = useSelector(selectOnClickMarker);
  console.log("coords", coords.latlng);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longtitude, setLongtitude] = useState(null);
  const [experience, setExperience] = useState("");

  function handleSubmitExperience(event) {
    event.preventDefault();

    dispatch(
      newExperiencePosted(
        name,
        image,
        description,
        latitude,
        longtitude,
        experience
      )
    );

    setName("");
    setImage("");
    setDescription("");
    setLatitude("");
    setLongtitude("");
    setExperience("");
  }

  const confirmLocation = () => {
    setLatitude(coords.latlng.lat);
    setLongtitude(coords.latlng.lng);
  };

  console.log("lat", latitude, longtitude);

  if (!user) return <h2>Loading...</h2>;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        NEW BAD EXPERIENCE! SHOULD BE SHITTY!
      </h1>
      <form
        onSubmit={handleSubmitExperience}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <label>NAME:</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        ></input>
        <label>IMAGE:</label>
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
          type="text"
        ></input>
        <img src={image} alt={""} width={300} />
        {/* <input type=“file” onChange={uploadImage} />
<div>
          <img
            src={
              image
                ? image
                : “https://clippingpathgreat.com/wp-content/uploads/2021/04/upload-files.jpg”
            }
            alt=“Upload”
            style={{ width: 200 }}
          />
          {image ? (
            <p style={{ fontSize: 20, color: “white” }}>
              Succesfully uploaded!
            </p>
          ) : (
            “”
          )}
        </div> */}

        <label>DESCRIPTION:</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
        ></textarea>
        <label>EXPERIENCE:</label>
        <textarea
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
          type="text"
        ></textarea>
        <button type="submit"> SHARE YOUR SHITTY EXPERIENCE HERE</button>
      </form>
      <div style={{ marginRight: "100%" }}>
        <CreateMarker />
      </div>
      <button onClick={confirmLocation}>Confirm Selection</button>
    </div>
  );
};

export default NewExperience;

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
    <>
      <div>
        <h1>NEW BAD EXPERIENCE</h1>
        <form onSubmit={handleSubmitExperience}>
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
          <div>
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
          </div>
          <button type="submit"> SHARE YOUR SHITTY EXPERIENCE HERE</button>
        </form>
      </div>
      <CreateMarker />
      <button onClick={confirmLocation}>Confirm Selection</button>
    </>
  );
};

export default NewExperience;

import CreateMarker from "../../components/CreateMarker";

import { useDispatch, useSelector } from "react-redux";
import { newExperiencePosted } from "../../store/locations/actions";
import { selectUser } from "../../store/user/selectors";
import { useState } from "react";

const NewExperience = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");
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

  if (!user) return <h2>Loading...</h2>;
  return (
    <>
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
        <label>Latitude:</label>
        <input
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
          type="number"
        ></input>
        <label>Longtitude:</label>
        <input
          value={longtitude}
          onChange={(event) => setLongtitude(event.target.value)}
          type="number"
        ></input>
        <button type="submit"> SHARE YOUR SHITTY EXPERIENCE HERE</button>
      </form>
      <CreateMarker />
    </>
  );
};

export default NewExperience;

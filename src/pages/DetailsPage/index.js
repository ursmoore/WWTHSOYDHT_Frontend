import SimpleMap from "../../components/SimpleMap";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchLocationById } from "../../store/locations/actions";
import { selectLocationDetails } from "../../store/locations/selectors";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const details = useSelector(selectLocationDetails);

  useEffect(() => {
    dispatch(fetchLocationById(id));
  }, [dispatch, id]);

  console.log("details", details);

  // if (!details) return <p>Loading the details...</p>;

  const { name, description, image, dislikes, user, comments } = details;

  return details ? (
    <div>
      <SimpleMap />
      <h1>Horrible Details come here!</h1>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt={name} />
      <p>{dislikes}</p>
      {comments?.map((post) => {
        return <div>{post.text}</div>;
      })}
    </div>
  ) : (
    <div> LOADING </div>
  );
};

export default DetailsPage;

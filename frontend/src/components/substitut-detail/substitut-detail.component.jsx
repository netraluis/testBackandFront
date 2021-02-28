import React, { useState, useEffect } from "react";
import './substitut-detail.styles.css'
const SubstitutDetail = (props) => {
  console.log(props.match.params.id);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:8000/api/v1/expSubRoutes/substitut/${props.match.params.id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.substitut);
          console.log(result.data.substitut);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className = "substitut__border">
      <img src="http://placeimg.com/640/480/people" alt="Lamp" width="320" height="240"></img>
      <div className="substitut__details">
        <ul>
          <li>
            <div>Name</div>
            <div className = "value-color">{item.name}</div>
          </li>
          <li>
            <div>Last name</div>
            <div className = "value-color">{item.last_name}</div>
          </li>
          <li>
            <div>Phone</div>
            <div className = "value-color">{item.phone}</div>
          </li>
          <li>
          <div>Judicial party</div>
          <div className = "value-color">{item.judicial_party ? item.judicial_party.join(', '): ''}</div>
        </li>
        </ul>
      </div>
      </div>
    );
  }
};

export default SubstitutDetail;

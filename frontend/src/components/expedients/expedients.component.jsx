import React, { useEffect, useState } from "react";
import "./expedients.styles.css";
import MiniCard from "../mini-card/mini-card.component";
import CustomButton from "../custom-button/custom-button.component";

const Expedients = () => {
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/expSubRoutes/expedients")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.expedients);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const showAllFunction = () => {
    setShowAll(!showAll);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2 className="header-expedients">Expedients</h2>
        <div className="mini-card-expedients">
          {items.map((item, idx) => {
            if (showAll || idx < 4)
              return (
                <MiniCard
                  key={item.id}
                  id={item.id}
                  titleValue={item.hearing_date
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                  subtitleName="Resume:"
                  subtitleValue={item.resume}
                  bodyName="Dificulty:"
                  bodyValue={item.dificulty}
                  url="expedient"
                />
              );
          })}
        </div>
        <div className="button-expedients">
          <CustomButton onClick={showAllFunction}>
            {showAll ? "SHOW LESS" : "SHOW ALL"}
          </CustomButton>
        </div>
      </div>
    );
  }
};

export default Expedients;

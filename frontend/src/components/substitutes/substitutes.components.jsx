import React, { useEffect, useState } from "react";
import "./substitutes.styles.css";
import MiniCard from "../mini-card/mini-card.component";
import CustomButton from "../custom-button/custom-button.component";

const Substitutes = () => {
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/expSubRoutes/substitutes")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data.substitutes);
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
        <h2 className="header-substitutes">Substitutes</h2>
        <div className="mini-card-substitutes">
          {items.map((item, idx) => {
            if (showAll || idx < 4)
              return (
                <MiniCard
                  key={item.id}
                  id={item.id}
                  titleName="Name: "
                  titleValue={`${item.name} ${item.last_name}`}
                  subtitleName="Judicial party:"
                  subtitleValue={item.judicial_party.join(", ")}
                  url="substitut"
                />
              );
          })}
        </div>
        <div className="button-substitutes">
          <CustomButton onClick={showAllFunction}>
            {showAll ? "SHOW LESS" : "SHOW ALL"}
          </CustomButton>
        </div>
      </div>
    );
  }
};

export default Substitutes;

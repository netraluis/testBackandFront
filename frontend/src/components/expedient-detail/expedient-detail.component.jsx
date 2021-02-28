import React, {useState, useEffect} from "react"
import './expedient-detail.styles.css'
const ExpedientDetail = (props) => {
    console.log(props.match.params.id)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:8000/api/v1/expSubRoutes/expedient/${props.match.params.id}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.data.expedient);
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
              <div className="expedient__details">
                <ul>
                  <li><div>Hearing_date</div><div className = "value-color">{item.hearing_date ? item.hearing_date.split(" ").slice(0,4).join(' '):''}</div></li>
                  <li><div>Resume</div><div className = "value-color">{item.resume}</div></li>
                  <li><div>Dificulty</div><div className = "value-color">{item.dificulty}</div></li>
                  <li><div>Judicial party</div><div className = "value-color">{item.judicial_party}</div></li>
                  <li>Description<span>{item.description}</span></li>
                </ul>
              </div>
      );
    }
  };

  export default ExpedientDetail
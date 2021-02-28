import React from 'react'; 
import CustomButton from '../custom-button/custom-button.component';
import { Link } from "react-router-dom";
import './mini-card.styles.css'

const MiniCard = ({id, titleName, titleValue, subtitleName, subtitleValue, bodyName, bodyValue, url}) =>{
    return(
        <div className="mini-card ">
            <div>
              <strong>{titleName} {titleValue}</strong>
            </div>
            <h3>{subtitleName} {subtitleValue}</h3>
            <h4>{bodyName} {bodyValue}</h4>
            <Link className="mini-card-link" to={`${url}/${id}`}>
              <CustomButton>SEE MORE</CustomButton>
            </Link>
          </div>
    )
}

export default MiniCard
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



const StarRating = ({ totalStars = 5 }) => {
return (
    <div style={{display:"flex",gap:"5px"}}>
    {Array.from({ length: totalStars }).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} width={25} color="gold"/>
    ))}
    </div>
);
};

export default StarRating;
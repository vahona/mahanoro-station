import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  {Places} from '../actions/PlacesDestinationAction'




function WhereThePlace( {place} ) {
    	const places = useSelector((state) => state.places);

function placespossible() {
  const placelist = places
    .map((place) => <div place={place}>{place.destination}</div>);
    console.log(place);
  return placelist;
}




  return (
    <>
      <Link to="/">{placespossible}</Link>
    </>
  );
}




export default WhereThePlace;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function WhereThePlace( state ) {
    	const places = useSelector((state) => state.places);
       console.log(places);
     
  return (
    <>
      <Link to="/">{state.destination}</Link>
    </>
  );
}

export default WhereThePlace;

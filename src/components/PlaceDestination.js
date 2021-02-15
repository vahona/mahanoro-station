import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import  {Places} from '../actions/PlacesDestinationAction'


function WhereThePlace({place} ) {
    	const places = useSelector((state) => state.places);
      console.log(places);

function placespossible() {
  if (!places) return;
  const placelist = places
    .map((place) => <div place={place}>{place.destination}</div>);
    console.log(place);
  return placelist;
}

  return (
    <>
      <Link to="/">
        <button>{placespossible}</button>
      </Link>
      <Link to="/">
        <button>Toamasin</button>
      </Link>
      <Link to="/">
        <button>Vatomandry</button>
      </Link>
      <Link to="/">
        <button>Moramanga</button>
      </Link>
    </>
  );
}




export default WhereThePlace;

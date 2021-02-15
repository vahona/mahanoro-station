import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ContainerButton, WhereToGo } from "../Style";
import  {Places} from '../actions/PlacesDestinationAction'

import { FcFactory } from "react-icons/fc";

import { AiFillCar } from "react-icons/ai";




function WhereThePlace(place ) {
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
      <WhereToGo>
        <AiFillCar className="car" size="100px" />
        Where are you going
      </WhereToGo>
      <ContainerButton>
        <Link to="/NextTripToGo">
          <Button>
            <FcFactory className="town" size="30px" />
            Tananarivo
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <FcFactory className="town" size="30px" />
            Toamasin
          </Button>
        </Link>
        <Link to="/">
          <Button>
            {" "}
            <FcFactory className="town" size="30px" />
            Vatomandry
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <FcFactory className="town" size="30px" />
            Moramanga
          </Button>
        </Link>
      </ContainerButton>
    </>
  );
}




export default WhereThePlace;

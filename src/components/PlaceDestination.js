import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ContainerButton, WhereToGo } from "../Style";
import  {Places} from '../actions/PlacesDestinationAction'

import { FcFactory } from "react-icons/fc";

import { AiFillCar } from "react-icons/ai";

import Town from "../images/Town.svg"
import BigCar from '../images/noto-v1_bus.svg'




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
        <img src={BigCar} />
        Where are you going
      </WhereToGo>
      <ContainerButton>
        <Link to="/NextTripToGo">
          <Button>
            <img src={Town} alt="town" />
            Tananarivo
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <img src={Town} alt="town" />
            Toamasin
          </Button>
        </Link>
        <Link to="/">
          <Button>
            {" "}
            <img src={Town} alt="town" />
            Vatomandry
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <img src={Town} alt="town" />
            Moramanga
          </Button>
        </Link>
      </ContainerButton>
    </>
  );
}




export default WhereThePlace;

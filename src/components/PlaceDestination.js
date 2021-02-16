import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ContainerButton, WhereToGo } from "../Style";
import Places from '../actions/PlacesDestinationAction'
import {connect} from 'react-redux'


import Town from "../images/Town.svg"
import BigCar from '../images/noto-v1_bus.svg'




function WhereThePlace({places, Places} ) {
    	const place = useSelector((state) => state.places);
      console.log(place);
      const wherePlace = null

      useEffect(() => {
          // Places()
      }, [])



function placespossible() {
  if (!places) return;
  const placelist = places
    .map((place) => <div place={place}>{place.destination}</div>);
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




export default WhereThePlace

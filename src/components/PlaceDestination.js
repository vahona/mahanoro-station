import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  ContainerButton,
  WhereToGo,
  ContainerToGo,
  ImageToGo,
  ImageTown,
  SubTitlewheretogo,
} from "../Style";
import Places from '../actions/PlacesDestinationAction'
import {connect} from 'react-redux'


import Town from "../images/Town.svg"
import BigCar from '../images/noto-v1_bus.svg'




function WhereThePlace( ) {
    	const place = useSelector((state) => state.places);
      console.log(place);
      const wherePlace = null

      // useEffect(() => {
      //     Places()
      // }, [])

function placespossible({ places, Places }) {
  if (!places) return;
  const placelist = Places.map((place) => (
    <div place={place}>{place.destination}</div>
  ));
  return placelist;
}

  return (
    <>
      <ContainerToGo>
        <WhereToGo>
          <ImageToGo src={BigCar} />
          <SubTitlewheretogo>Where are you going</SubTitlewheretogo>
        </WhereToGo>
        <ContainerButton>
          <Link to="/NextTripToGo">
            <Button>
              <ImageTown src={Town} alt="town" />
              Tananarivo
            </Button>
          </Link>
          <Link to="/NextTripToGo">
            <Button>
              <ImageTown src={Town} alt="town" />
              Toamasin
            </Button>
          </Link>
          <Link to="/NextTripToGo">
            <Button>
              {" "}
              <ImageTown src={Town} alt="town" />
              Vatomandry
            </Button>
          </Link>
          <Link to="/NextTripToGo">
            <Button>
              <ImageTown src={Town} alt="town" />
              Moramanga
            </Button>
          </Link>
        </ContainerButton>
      </ContainerToGo>
    </>
  );
}




export default WhereThePlace

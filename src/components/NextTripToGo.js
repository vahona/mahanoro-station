import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";


import { FcAlarmClock } from "react-icons/fc";
import {SubContainers, ButtonBook, SmallContainer} from '../Style'
import { AiFillCar } from "react-icons/ai";
import Clock from '../images/twemoji_alarm-clock.svg'
import BigCar from '../images/noto-v1_bus.svg'


const Linksto = styled(Link)`
  cursor: pointer;
`;


const date = new Date().toDateString();

const  newDate = new Date();

 const tomorrow = newDate.setDate(new Date().getDate() + 1);

 const thirdDay = tomorrow + 1

function NextTripToGo() {
    return (
      <>
        <SmallContainer>
          <div>
            <img src={Clock} />
          </div>
          <h2>Next trips to:</h2>
        </SmallContainer>
        <SubContainers>
          <img src={BigCar} />
          <div>
            <div>{date}</div>
            <div> 17: 00 </div>
          </div>
          <Linksto to="/SeatsBook">
            <ButtonBook>Book a seat</ButtonBook>
          </Linksto>
        </SubContainers>
        <SubContainers>
          <img src={BigCar} />
          <div>
            <div>{tomorrow}</div>
            <div> 17: 00 </div>
          </div>
          <Linksto to="/SeatsBook">
            <ButtonBook>Book a seat</ButtonBook>
          </Linksto>
        </SubContainers>
        <SubContainers>
          <img src={BigCar} />
          <div>
            <div>{thirdDay}</div>
            <div> 17: 00 </div>
          </div>
          <Linksto to="/SeatsBook">
            <ButtonBook> Book a seat </ButtonBook>
          </Linksto>
        </SubContainers>
      </>
    );
}

export default NextTripToGo
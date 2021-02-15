import React from "react";

import { FcAlarmClock } from "react-icons/fc";
import {SubContainers, ButtonBook, SmallContainer} from '../Style'
import { AiFillCar } from "react-icons/ai";


const date = new Date().toDateString();

const  newDate = new Date();



 const tomorrow = newDate.setDate(new Date().getDate() + 1);

 const thirdDay = tomorrow + 1

function NextTripToGo() {
    return (
      <>
        <SmallContainer>
          <div>
            <FcAlarmClock className="clock" size="80px" />
          </div>
          <h2>Next trips to:</h2>
        </SmallContainer>
        <SubContainers>
          <AiFillCar size="80px" color="orange" />
          <div>
            <div>{date}</div>
            <div> 17: 00 </div>
          </div>
          <ButtonBook>Book a seat</ButtonBook>
        </SubContainers>
        <SubContainers>
          <AiFillCar size="80px" color="orange" />
          <div>
            <div>{tomorrow}</div>
            <div> 17: 00 </div>
          </div>
          <ButtonBook>Book a seat</ButtonBook>
        </SubContainers>
        <SubContainers>
          <AiFillCar size="80px" color="orange" />
          <div>
            <div>{thirdDay}</div>
            <div> 17: 00 </div>
          </div>
          <ButtonBook>Book a seat</ButtonBook>
        </SubContainers>
      </>
    );
}

export default NextTripToGo
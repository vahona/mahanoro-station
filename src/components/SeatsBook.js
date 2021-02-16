import React from 'react'
import {
  SectionContainer,
  List,
  UlList,
  SecondTitle,
  BookSeatButton,
  ListsSeats,
  ListSeat,
  CarImage,
  ButtonChair,
} from "../Style";
import BigCar from "../images/noto-v1_bus.svg";
import Seat from '../images/emojione_seat.svg'

function SeatsBook() {
    return (
      <>
        <SectionContainer>
          <article>
            <CarImage src={BigCar} />
            <h2>Pick a seat</h2>
            <nav>
              <ListSeat>
                <li>&nbsp;</li>
                <li>&nbsp;</li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    {" "}
                    <img src={Seat} alt="seat" />{" "}
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
                <li>
                  <ButtonChair>
                    <img src={Seat} alt="seat" />
                  </ButtonChair>
                </li>
              </ListSeat>
            </nav>
          </article>
          <article>
            <SecondTitle> Book a seat to: </SecondTitle>
            <h3>Trip information</h3>
            <nav>
              <UlList>
                <List>
                  <p> Departure Time:</p> <p>sjsdjsdkjsd</p>
                </List>
                <List>
                  <p> Driver: </p> <p>sjsdjsdkjsd</p>
                </List>
                <List>
                  <p> Driver's contact: </p> <p>sjsdjsdkjsd</p>
                </List>
                <List>
                  <p> Estimated duration: </p> <p>sjsdjsdkjsd</p>
                </List>
                <List>
                  <p> Breakes: </p> <p>sjsdjsdkjsd</p>
                </List>
              </UlList>
            </nav>
            <div>10000AR/seat</div>
            <BookSeatButton>Book .. seat</BookSeatButton>
            <div>Total: </div>
          </article>
        </SectionContainer>
      </>
    );
}

export default SeatsBook
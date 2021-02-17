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
  Price,
  ContainerPrice,
  PriceSign,
  PriceContainer,
  TitleInformation,
  ValueOfInformation,
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
                  <TitleInformation> Departure Time:</TitleInformation> <ValueOfInformation>sjsdjsdkjsd</ValueOfInformation>
                </List>
                <List>
                  <TitleInformation> Driver: </TitleInformation> <ValueOfInformation>Royal</ValueOfInformation>
                </List>
                <List>
                  <TitleInformation> Driver's contact: </TitleInformation> <ValueOfInformation>0347829</ValueOfInformation>
                </List>
                <List>
                  <TitleInformation> Estimated duration: </TitleInformation> <ValueOfInformation>9h</ValueOfInformation>
                </List>
                <List>
                  <TitleInformation> Breakes: </TitleInformation> <ValueOfInformation>10min</ValueOfInformation>
                </List>
              </UlList>
            </nav>
            <PriceContainer>
              <ContainerPrice>
                <Price>10000</Price>
                <PriceSign>AR/seat </PriceSign>
              </ContainerPrice>
              <BookSeatButton >Book .. seat</BookSeatButton>
              <div>Total: </div>
            </PriceContainer>
          </article>
        </SectionContainer>
      </>
    );
}

export default SeatsBook
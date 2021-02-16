import React from 'react'
import {
  SectionContainer,
  List,
  UlList,
  SecondTitle,
  BookSeatButton,
} from "../Style";
import { AiFillCar } from "react-icons/ai";

function SeatsBook() {
    return (
      <>
        <SectionContainer>
          <article>
              <AiFillCar color="orange" size="100px"/>
            <h2>Pick a seat</h2>

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
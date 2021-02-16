import React from 'react'

import BigCar from "../images/noto-v1_bus.svg";

import UserInterface from '../images/flat-ui_user-interface.svg'

import {
  Container,
  SubContainer,
  Content,
  SubForm,
  Input,
  UpdateButton,
  CancelButton,
  BigContainer,
  Article,
  Image1,
} from "../Style";



function Profileaccount() {
    return (
      <BigContainer>
        <Container>
          <Article>
            <Image1 src={UserInterface} alt="User" />
            <h3>My personal information</h3>
            <form>
              <SubForm>
                <labe>
                  <div>First name</div>
                  <Input placeholder="name" type="text" />
                </labe>
              </SubForm>
              <SubForm>
                <labe>
                  <div>Last name</div>
                  <Input placeholder="name" type="text" />
                </labe>
              </SubForm>
              <SubForm>
                <labe>
                  <div>Phone Number</div>
                  <Input placeholder="name" type="text" />
                </labe>
              </SubForm>
              <UpdateButton>Update</UpdateButton>
            </form>
          </Article>
          <Article>
            <h1>My account</h1>
            <h4>Name</h4>
            <h2>My bookings</h2>
            <SubContainer>
              <img src={BigCar} alt="car" />
              <Content>place and date</Content>
              <Content>number of seat and price</Content>
              <CancelButton>cancel</CancelButton>
            </SubContainer>
            <SubContainer>
              <img src={BigCar} alt="car" />
              <Content>place and date</Content>
              <Content>number of seat and price</Content>
              <CancelButton>cancel</CancelButton>
            </SubContainer>
            <SubContainer>
              <img src={BigCar} alt="car" />
              <Content>place and date</Content>
              <Content>number of seat and price</Content>
              <CancelButton>cancel</CancelButton>
            </SubContainer>
            <SubContainer>
              <img src={BigCar} alt="car" />
              <Content>place and date</Content>
              <Content>number of seat and price</Content>
              <CancelButton>cancel</CancelButton>
            </SubContainer>
          </Article>
        </Container>
      </BigContainer>
    );
}

export default Profileaccount
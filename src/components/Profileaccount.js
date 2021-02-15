import React from 'react'

import { Container, SubContainer, Content } from "../Style";


function Profileaccount() {
    return (
      <div>
        <h1>My account</h1>
        <h4>Name</h4>
        <Container>
          <article>
            <h3>My personal information</h3>
            <form>
              <div>
                <labe>
                  First name
                  <input placeholder="name" type="text" />
                </labe>
              </div>
              <div>
                <labe>
                  Last name
                  <input placeholder="name" type="text" />
                </labe>
              </div>
              <div>
                <labe>
                  Phone Number
                  <input placeholder="name" type="text" />
                </labe>
              </div>
              <button>Update</button>
            </form>
          </article>
          <article>
            <h2>My bookings</h2>
            <SubContainer>
                <Content>place and date</Content>
                <Content>number of seat and price</Content>
                <button>cancel</button>
            </SubContainer>
          </article>
        </Container>
      </div>
    );
}

export default Profileaccount
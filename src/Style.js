import styled from "styled-components";

export const Head = styled.div`
 background-color: black;
 display: flex;
 justify-content: space-between;
`

export const Title = styled.h1`
 color: white;
 margin-inline-start: 2rem;
`

export const WhereToGo = styled.h1`
  .car {
    color: #ff8c00;
    margin-right: 1rem;
  }
`;

export const Container = styled.section`
  display: flex;
`

export const SubContainer = styled.section`
  display: flex;
`;

export const Content = styled.section`
  margin-right: 2rem;
`;

export const Button = styled.button`
  padding-left: 3rem;
  padding-right: 3rem;
  color: white;
  background-color: #0f0e17;
  padding: 1rem;
  margin: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  .town {
      margin-right: 1rem;
  }
`;

export const ContainerButton = styled.div`
  columns: 2;
`

export const IconContainer = styled.div`
  .clock {
    width: 10rem;
  }
`

export const SubContainers = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ButtonBook = styled.button`
  margin-bottom: 2rem;
  background-color: #e53170;
  border: none;
  cursor: pointer;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-inline-end: 1rem;
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SmallContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-inline-start: 2rem;
  margin-inline-end: 2rem;
`

export const List = styled.li`
 display: flex;
 justify-content: space-between;
`

export const UlList = styled.ul`
  padding-left: 0;
  margin-left: -5rem;
`

export const SecondTitle = styled.h1`
  font-size: 40px;
`

export const BookSeatButton = styled.button`
  background-color: #e53170;
  color: white;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none
`;

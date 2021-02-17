import styled from "styled-components";


export const Conatiner = styled.div`
  font-family: Rubik;
 
`

export const Head = styled.div`
 background-color: black;
 display: flex;
 justify-content: space-between;
`

export const HeadImage = styled.img`
  margin-inline-start: 2rem;
`

export const Title = styled.h1`
 color: white;

`

export const SubTitlewheretogo = styled.div`
  margin-top: 1rem;
 
`;

export const WhereToGo = styled.h1`
  display: flex;
  justify-content: space-between;
    margin-inline-end: 27%;
    margin-inline-start: 13%;
`;

export const ImageToGo = styled.img`
  margin-right: 3rem;
  
`;

export const ContainerToGo = styled.div`
   text-align: center;
   align-items: center;
`

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-inline-start: 2rem;
  margin-inline-end: 2rem;
`

export const SubContainer = styled.section`
  display: flex;
`;

export const Content = styled.section`
  margin-right: 2rem;
`;

export const Button = styled.button`
  width: 80%;
  color: white;
  background-color: #0f0e17;
  padding: 1rem;
  margin: 1rem;
  text-transform: uppercase;
  font-weight: 1;
  font-size: 36px;
  line-height: 42.66px;
  cursor: pointer;
`;


export const ImageTown = styled.img`
  margin-right: 2rem
`

export const ContainerButton = styled.div`
  margin-inline-start: 10%;
  margin-inline-end: 10%;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 500px);
    grid-gap: 5px;
  }


`;

export const IconContainer = styled.div`
  .clock {
    width: 10rem;
  }
`

export const SubContainers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline-start: 10%;
  margin-inline-end: 10%;
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
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 400px);
    grid-column-gap: 1rem;
    font-family: Rubik
  }

  justify-content: space-between;
  margin-inline-start: 2rem;
  margin-inline-end: 2rem;
`;

export const List = styled.li`
 display: flex;
 justify-content: space-between;
`

export const UlList = styled.ul`
  padding-left: 0;
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
  border: none;
`;

export const ListSeat = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-column-gap: 1rem;
  list-style: none;
`;

export const ListsSeats = styled.li`
 
`;

export const SubForm = styled.div`
  margin: 2rem;
`

export const Input = styled.input`
  background-color: black;
  padding-left: 30%;
  padding-right: 40%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  &::placeholder {
    color: #ff8906;
    font-family: Rubik;
  }
`;

export const UpdateButton = styled.button`
  border: none;
  background-color: #e53170;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  color: white;
  cursor: pointer;
  margin-inline-start: 100%;
`;

export const CancelButton = styled.button`
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  color: white;
  background-color: #FF8906;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
`;

export const BigContainer = styled.div`
   text-align: center;
   justify-content:center;
   align-items: center;
`

export const Article = styled.article`
   margin-top: 2rem;
`

export const Image1 = styled.img`
  margin-inline-start: 90%;
`

export const AccountHeader = styled.h1`
  font-size: 40px;
`

export const CarImage = styled.img`
  margin-inline-start: 50%;
  margin-top: 2rem;
`
export const ButtonChair = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`

export const Price = styled.div`
  color: rgb(255, 165, 0);
  font-weight: 500;
  font-size: 40px;
`;

export const ContainerPrice = styled.div`
  display: flex;
`;

export const PriceSign = styled.div`
  font-weight: 600;
  margin-top: 1.5rem;
`

export const PriceContainer = styled.div`
  margin-inline-start: 3rem
`
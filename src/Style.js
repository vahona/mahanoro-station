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


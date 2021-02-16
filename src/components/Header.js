import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Head, Title, HeadImage } from "../Style";
import Vector from '../images/Vector.svg'


const Linksto = styled(Link)`
  color: #d3d3d3;
  text-decoration: none;
  margin-inline-end: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

export default function Header() {
    return (
      <Head>
        <HeadImage src={Vector} alt="car" />
        <Title>Mahanoro Station</Title>
        <Linksto to="/Profileaccount">My account</Linksto>
      </Head>
    );
}

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Head, Title } from "../Style";


const Linksto = styled(Link)`
  color: gray;
  text-decoration: none;
  margin-inline-end: 2rem;
  margin-top: 2rem;
`;

export default function Header() {
    return (
        <Head>
            <Title>Mahanoro Station</Title>
           <Linksto to="/">My account</Linksto>
        </Head>
    )
}

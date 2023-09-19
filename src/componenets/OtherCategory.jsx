import React from 'react'
import { othercategories } from "../data"
import OtherCatList from "./OtherCatList"
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const OtherCategory = () => {
  return (
    <Container>
      {othercategories.map((item) => (
        <OtherCatList item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default OtherCategory
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 200px;
  border-radius:10px;
`;

const Product = ({ image, name }) => {
  return (
    <div>
      <Image src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Product;

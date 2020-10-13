import React from "react";
import styled from "styled-components";

const Instagram = () => {
  return (
    <a href="https://www.instagram.com/" target="_blank">
      <InstagramContainer>
        <img
          src="https://i.insider.com/59de38ffc150553f008b4801?width=1100&format=jpeg&auto=webp"
          alt="Manjil Junior"
        />

        <img
          src="https://i.ytimg.com/vi/zSLtgIwGRAk/maxresdefault.jpg"
          alt="Manjil Junior"
        />

        <img
          src="https://raven.contrado.com/resources/images/2020-6/150524/personalised-bikinis-919570_l.jpg?w=750&h=750&auto=compress,format&fit=crop"
          alt="Manjil Junior"
        />

        <img
          src="https://media.missguided.com/i/missguided/L423512_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$"
          alt="Manjil Junior"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/0217/9066/products/Selena-Bottoms-Black-01_1024x1024.jpg?v=1536746472"
          alt="Manjil Junior"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/0006/4995/3341/products/DARIA_ROCHA2_620x.jpg?v=1595217253"
          alt="Manjil Junior"
        />
      </InstagramContainer>
    </a>
  );
};

export default Instagram;

const InstagramContainer = styled.div`
  padding: 0.5rem 0;
  background-color: #fff;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;

  img {
    height: 12rem;
    width: 16.66666667%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    cursor: pointer;
    transform-origin: center;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

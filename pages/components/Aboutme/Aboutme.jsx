import React from "react";
import styled from "styled-components";
import SidebarBox from "../SidebarBox/SidebarBox";
import { ThirdHeading, Paragraph } from "../../../styles/title";
import SocialCard from "../SocialCard/SocialCard";

const Aboutme = () => {
  return (
    <AboutmeContainer>
      <SidebarBox>
        <ThirdHeading className="title">About Me</ThirdHeading>
        <div className="ImageContainer">
          <Image
            src="https://www.hurtigruten.com.au/globalassets/photos/destinations/alaska/2500x1250_fjell-og-villmark-alaska-hgr-137464--foto_shutterstock.jpg?width=1245&height=850&transform=DownFill"
            alt="Author Image"
          />
          <span>Manjil Junior</span>
          <div className="overlay" />
        </div>
        <Paragraph className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quis
          non doloribus ipsum saepe, sequi quas enim ducimus fugiat et autem
          cumque eligendi atque, ratione eaque deserunt voluptatibus eos error
          repudiandae hic adipisci, dolorem neque assumenda excepturi! Tempore
          accusamus explicabo ipsa expedita non debitis commodi, illo enim
          cupiditate id quis!
        </Paragraph>
        .<SocialCard className="social" />
      </SidebarBox>
    </AboutmeContainer>
  );
};

export default Aboutme;

const AboutmeContainer = styled.div`
  text-align: center;

  .title {
    margin-bottom: 1rem !important;
  }

  .paragraph {
    font-weight: 400;
    color: #666;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .social {
    margin-bottom: 1rem;
  }

  .ImageContainer {
    position: relative;
    height: 13rem;
    width: 13rem;
    overflow: hidden;
    cursor: pointer;
    margin: 0 auto 1.2rem auto;

    span {
      z-index: 2;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.1rem;
      transform-origin: center;
      opacity: 0;
      transition: all 0.3s ease;
      letter-spacing: 0.5px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to right bottom,
        rgba(250, 112, 154, 0.9),
        rgba(254, 225, 64, 0.9)
      );
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s ease;
      transform: scale(0);
      transform-origin: center;
    }

    &:hover {
      span {
        opacity: 1;
        font-size: 1.2rem;
      }
      .overlay {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(0.95);
`;

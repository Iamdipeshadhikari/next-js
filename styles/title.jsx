import styled from "styled-components";

export const Paragraph = styled.p`
  color: #999;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Rubik", sans-serif;
`;

export const NormalText = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  color: #6c6f76;
  text-transform: capitalize;
  padding: 0 0.5rem;
  letter-spacing: 0.5px;
`;

export const NormalHoverText = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  color: #6c6f76;
  text-transform: capitalize;
  padding: 0 0.5rem;
  letter-spacing: 0.5px;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  transition: all 0.2s ease;

  i {
    padding-left: 0.5rem;
  }

  &:hover {
    color: #f8b195;
  }
`;

export const PrimaryColorHeading = styled.h1`
  p {
    color: #f8b195;
    font-size: 2.5rem;
    cursor: pointer;
    letter-spacing: 0.5px;
    display: inline;
    background-repeat: no-repeat;
    transition: all 500ms ease-in-out;

    background-position: bottom left;
    background-size: 0% 5px;
    background-image: linear-gradient(
      to right,
      rgba(250, 112, 154, 0.5),
      rgba(254, 225, 64, 0.5)
    );
    padding-bottom: 5px;
  }

  &:hover p {
    background-size: 100% 5px;
  }

  /* &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  } */
`;

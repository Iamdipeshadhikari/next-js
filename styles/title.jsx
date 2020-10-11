import styled from "styled-components";

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

export const SecondaryHeading = styled.h2`
  font-size: 1.8rem;
  color: #0e0e0e;
  letter-spacing: 0.5px;
  font-weight: 900;
  padding: 0.2rem 1rem;
  border-left: 5px solid #f8b195;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;

  &:hover {
    background-color: #f8b195;
    color: #fff;
    border-radius: 3px;
    box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(180, 180, 180, 0.849);
  letter-spacing: 0.5px;
  line-height: 1.4;
`;

export const ThirdHeading = styled.h3`
  font-size: 2.5rem;
  color: #999;
  letter-spacing: 0.5px;
  cursor: pointer;
  padding: 0 1.5rem;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-3px);
  }
`;

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

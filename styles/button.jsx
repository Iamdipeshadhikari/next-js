import styled from "styled-components";

export const PrimaryButton = styled.button`
  border: none;
  outline: none;
  padding: 0.3rem 1rem;
  font-family: "Yanone Kaffeesatz", sans-serif;
  cursor: pointer;
  border-radius: 10rem;
  color: #fff;
  font-size: 1.2rem;
  background-color: #f8b195;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: 500;

  i {
    font-size: 1rem;
    padding-right: 0.2rem;
  }
`;

export const SocialButton = styled.button`
  margin-bottom: 1rem;
  background-color: #999;
  color: #fff;
  border: none;
  outline: none;
  padding: 0.7rem 1.5rem;
  border-radius: 10rem;
  display: flex;
  font-family: "Yanone Kaffeesatz", sans-serif;
  font-size: 1rem;
  align-items: center;

  i {
    margin-right: 1rem;
  }
`;

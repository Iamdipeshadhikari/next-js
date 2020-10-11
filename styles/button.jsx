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

  /* Mobile Phones 480 */
  @media screen and (max-width: 480px) {
    font-size: 0.9rem !important;
    padding: 0.3rem 0.5rem;
  }

  /* Mobile Phones 411 */
  @media screen and (max-width: 411px) {
    font-size: 0.8rem !important;
    padding: 0.3rem 0.5rem;
  }

  /* Mobile Phones 360 */
  @media screen and (max-width: 360px) {
    font-size: 0.6rem !important;
    padding: 0.3rem 0.5rem;
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

export const TagButton = styled.a`
  padding-top: 3px;
  padding-bottom: 2px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-size: 0.8rem;
  color: #fff;
  background-color: #333;
  font-weight: 400;
  letter-spacing: 1px;
  border-radius: 10rem;
  border: 4px solid #fff;

  i {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const ThirdButton = styled.a`
  padding: 0.3rem 1.5rem;
  line-height: 1.9;
  border-radius: 4px;
  color: #999;
  font-size: 1.2rem;
  border: 3px solid rgba(153, 153, 153, 1);
  transition: all 0.2s ease;

  &:hover {
    color: #f8b195;
    border: 3px solid #f8b195;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

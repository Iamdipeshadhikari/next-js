import styled from "styled-components";

export const PrimaryInput = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 10rem;
    background-color: #fff;
    box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    font-family: "Yanone Kaffeesatz", sans-serif;
    color: #999;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-align: center;

    &::placeholder {
      color: #999;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    border: none;
    outline: none;
    background: transparent;
  }

  i {
    font-size: 1.5rem;
    color: #999;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #555;
    }
  }

  .inputClose {
    position: absolute;
    top: 50%;
    right: 3.5rem;
    transform: translateY(-50%);
    font-size: 1.5rem;
    color: #999;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #333;
    }
  }
`;

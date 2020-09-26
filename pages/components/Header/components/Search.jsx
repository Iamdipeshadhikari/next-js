import styled from "styled-components";

export default function Search({ close }) {
  return (
    <SearchContainer>
      <span onClick={close} className="close">
        <i class="fas fa-times"></i>
      </span>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
        aliquam suscipit nemo et voluptas quas fugit cumque in asperiores sequi!
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 247, 243, 0.8);
  height: 100vh;
  width: 100vw;
  padding: 3rem 5rem 1rem 5rem;
  overflow-y: scroll;

  .close {
    display: block;
    float: right;
    height: 3rem;
    width: 3rem;
    background-color: #2e2f33;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 1.7rem;
    }
  }

  .content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

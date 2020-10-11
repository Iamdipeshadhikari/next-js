import styled from "styled-components";

export default function SocialCard(props) {
  return (
    <SocialCardContainer>
      <li className="facebook">
        <i class="fab fa-facebook-f"></i>
      </li>

      <li className="instagram">
        <i class="fab fa-instagram"></i>
      </li>

      <li className="twitter">
        <i class="fab fa-twitter"></i>
      </li>

      <li className="email">
        <i class="far fa-envelope"></i>
      </li>
    </SocialCardContainer>
  );
}

const SocialCardContainer = styled.div`
  display: flex;
  justify-content: center;

  .facebook {
    background-color: #3b5999;
  }
  .instagram {
    background-color: #e4405f;
  }
  .twitter {
    background-color: #55acee;
  }
  .email {
    background-color: #c71610;
  }

  li {
    width: 3rem;
    height: 3rem;
    background-color: #f00;
    margin-right: 0.7rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 2px 2px 7px rgba(0,0,0,0.2);

    i {
        font-size: 1.2rem;
    }
  }
`;

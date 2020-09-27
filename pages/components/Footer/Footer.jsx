import styled from "styled-components";
import Link from "next/link";
import { NormalText } from "../../../styles/title";

export default function Header() {
  return (
    <FooterContainer>
      <div className="copyright">A Creavitive blog by manjil junior</div>
      <ul className="footerItems">
        <li className="footerItem">
          <Link href="/">
            <NormalText>Terms of use</NormalText>
          </Link>
        </li>

        <li className="footerItem">
          <Link href="/">
            <NormalText>Privacy policy</NormalText>
          </Link>
        </li>

        <li className="footerItem">
          <Link href="/">
            <NormalText>About us</NormalText>
          </Link>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem 5rem;
  box-shadow: 10px -3px 8px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .copyright {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: #333;
  }

  .footerItems {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  /* Normal */
  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  /* Mobile */
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;

    .copyright {
      font-size: 1rem;
      padding-bottom: 1rem;
    }
  }
`;

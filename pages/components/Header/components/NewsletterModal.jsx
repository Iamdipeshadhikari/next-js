import styled from "styled-components";
import { PrimaryColorHeading, NormalText } from "../../../../styles/title";
import { PrimaryInput } from "../../../../styles/input";
import { PrimaryButton } from "../../../../styles/button";

export default function NewsletterModal() {
  return (
    <NewletterContainer>
      <div className="col-1 left">
        <img src="/Images/Subscribe.png" alt="Subscription" />
      </div>
      <div className="col-1 right">
        <PrimaryColorHeading>
          <p>Subscribe to our Newsletter</p>
        </PrimaryColorHeading>
        <NormalText className="info">
          Subscribe to my newletter to gel all latest updates.
        </NormalText>
        <form>
          <PrimaryInput
            type="text"
            className="input"
            name="email"
            placeholder="Your email address"
          />
          <PrimaryButton className="button" type="submit">
            Submit
          </PrimaryButton>
        </form>
      </div>
    </NewletterContainer>
  );
}

const NewletterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .col-1 {
    width: 50%;
    height: 100%;
  }

  .left {
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      object-fit: cover;
    }
  }

  .right {
    padding-left: 2rem;
  }

  .info {
    text-transform: none;
    color: #999;
    font-size: 1rem;
    padding: 0.5rem 0;
  }

  .button {
    width: 100%;
    background-color: #999;
    font-size: 1.3rem;
    padding: 0.5rem;
    transition: all 0.2s ease;
    margin-top: 1rem;

    &:hover {
      background-color: #f8b195;
    }
  }

  .input {
    width: 100%;
    margin-top: 0.5rem;
  }

  /* Small Tablets */
  @media screen and (max-width: 800px) {
    flex-direction: column;

    .col-1 {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { PrimaryColorHeading, NormalText } from "../../../styles/title";
import { PrimaryInput } from "../../../styles/input";
import { PrimaryButton } from "../../../styles/button";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <PrimaryColorHeading className="title">
        <p>Our Newsletter</p>
      </PrimaryColorHeading>

      <NormalText className="info">
        Subscribe to my newletter to gel all latest updates. to get all lates
        and grestest news and free stuffs. @ only on manjil juniors bros
      </NormalText>

      <PrimaryInput
        type="text"
        className="input"
        name="name"
        placeholder="Your Full name"
      />

      <PrimaryInput
        type="text"
        className="input"
        name="email"
        placeholder="Your email address"
      />

      <PrimaryButton className="button" type="button">
        Subscribe
      </PrimaryButton>
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  .title {
    p {
      font-size: 2.5rem;
    }
  }

  .input {
    width: 100%;
    margin-top: 0.5rem;
  }

  .info {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    padding: 0;
    color: #999;
  }

  .button {
    margin-top: 1rem;
    width: 100%;
  }
`;

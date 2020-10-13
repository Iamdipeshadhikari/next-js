import React from "react";
import styled from "styled-components";
import { SecondaryHeading } from "../../../styles/title";
import { Row, Col } from "react-grid-system";
import PostCardSix from "../PostCardSix/PostCardSix";

const TopWriters = () => {
  return (
    <TopWritersContainer>
      <SecondaryHeading className="title">Top Writers</SecondaryHeading>

      <Row>
        <Col md={4} sm={12}>
          <PostCardSix />
        </Col>

        <Col md={4} sm={12}>
          <PostCardSix />
        </Col>

        <Col md={4} sm={12}>
          <PostCardSix />
        </Col>
      </Row>
    </TopWritersContainer>
  );
};

export default TopWriters;

const TopWritersContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;

  .title {
    margin-bottom: 1.5rem;
  }
`;

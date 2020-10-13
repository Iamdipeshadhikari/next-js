import React from "react";
import styled from "styled-components";
import PostCardFive from "../PostCardFive/PostCardFive";
import { Row, Col } from "react-grid-system";
import { SecondaryHeading } from "../../../styles/title";

const BottomBlogs = () => {
  return (
    <BottomBlogsContainer>
      <Row>
        <Col md={4} sm={12}>
          <SecondaryHeading style={{ marginBottom: "2rem" }}>
            User Favorite
          </SecondaryHeading>

          <PostCardFive />
          <PostCardFive />
          <PostCardFive />
        </Col>

        <Col md={4} sm={12}>
          <SecondaryHeading style={{ marginBottom: "2rem" }}>
            Most Liked
          </SecondaryHeading>

          <PostCardFive />
          <PostCardFive />
          <PostCardFive />
        </Col>

        <Col md={4} sm={12}>
          <SecondaryHeading style={{ marginBottom: "2rem" }}>
            Short Reads
          </SecondaryHeading>

          <PostCardFive shortReadCard />
          <PostCardFive shortReadCard />
          <PostCardFive shortReadCard />
        </Col>
      </Row>
    </BottomBlogsContainer>
  );
};

export default BottomBlogs;

const BottomBlogsContainer = styled.div`
  padding: 4rem 3rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

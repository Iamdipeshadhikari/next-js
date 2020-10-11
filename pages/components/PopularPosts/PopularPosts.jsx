import styled from "styled-components";
import PostCardSecond from "../PostCardSecond/PostCardSecond";
import { SecondaryHeading } from "../../../styles/title";
import { Container, Col, Row } from "react-grid-system";

export default function PopularPosts(props) {
  return (
    <PopularPostsContainer>
      <Container>
        <SecondaryHeading className="heading">
          Popular of the Month
        </SecondaryHeading>
      </Container>

      <Container>
        <Row>
          <Col sm={12} md={4}>
            <PostCardSecond />
          </Col>

          <Col sm={12} md={4}>
            <PostCardSecond />
          </Col>

          <Col sm={12} md={4}>
            <PostCardSecond />
          </Col>
        </Row>
      </Container>
    </PopularPostsContainer>
  );
}

const PopularPostsContainer = styled.div`
  padding: 3rem 0;
  width: 85%;
  margin: 0 auto;

  .content {
    display: flex;
    width: 100%;
  }
  .heading {
    margin-bottom: 3rem;
  }
`;

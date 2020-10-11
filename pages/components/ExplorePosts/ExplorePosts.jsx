import styled from "styled-components";
import PostCardSecond from "../PostCardSecond/PostCardSecond";
import Advertisement from "../Advertisement/Advertisement";
import Aboutme from "../Aboutme/Aboutme";
import Categories from "../Categories/Categories";
import Tags from "../Tags/Tags";
import { Container, Col, Row } from "react-grid-system";
import { SecondaryHeading } from "../../../styles/title";

export default function ExplorePosts() {
  return (
    <ExplorePostsContainer>
      <Container>
        <SecondaryHeading className="title">Explore Posts</SecondaryHeading>
      </Container>

      <Container>
        <Row>
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>

              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>

              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>

              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>

              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>

              <Col sm={12} md={6}>
                <PostCardSecond />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4}>
            <Advertisement style={{ height: "15rem", marginBottom: "2rem" }} />

            <Aboutme />
            <Categories />
            <Tags />
          </Col>
        </Row>
      </Container>
    </ExplorePostsContainer>
  );
}

const ExplorePostsContainer = styled.div`
  .title {
    margin-bottom: 3rem;
  }
  .item {
    margin-bottom: 2rem;
  }
`;

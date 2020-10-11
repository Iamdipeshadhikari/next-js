import styled from "styled-components";
import { Container, Col, Row } from "react-grid-system";
import { SecondaryHeading } from "../../../styles/title";
import PostCardThree from "../PostCardThree/PostCardThree";
import Newsletter from "../Newsletter/Newsletter";

export default function RecentPosts() {
  return (
    <RecentPostsContainer>
      <Container>
        <SecondaryHeading className="heading">Recent Posts</SecondaryHeading>
      </Container>
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <Row>
              <Col sm={12} md={6}>
                <PostCardThree />
              </Col>

              <Col sm={12} md={6}>
                <PostCardThree />
              </Col>

              <Col sm={12} md={6}>
                <PostCardThree />
              </Col>

              <Col sm={12} md={6}>
                <PostCardThree />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={3}>
            <Newsletter />
          </Col>
        </Row>
      </Container>
    </RecentPostsContainer>
  );
}

const RecentPostsContainer = styled.div`
  padding-bottom: 3rem;
  .heading {
    margin-bottom: 3rem;
  }
`;

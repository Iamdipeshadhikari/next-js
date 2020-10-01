import styled from "styled-components";
import { Container, Col, Row } from "react-grid-system";
import { SecondaryHeading } from "../../../styles/title";
import PostCardThree from "../PostCardThree/PostCardThree";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aspernatur minima pariatur earum ipsum minus fugit voluptatibus,
            quos explicabo necessitatibus qui. Nulla, tempore error incidunt
            sapiente facilis repudiandae explicabo quod repellat amet quae.
            Consectetur cumque sit aliquam nobis delectus ipsa accusantium,
            vitae ea error. Quod ad consectetur inventore voluptates id.
          </Col>
        </Row>
      </Container>
    </RecentPostsContainer>
  );
}

const RecentPostsContainer = styled.div`
  padding-bottom: 5rem;
  .heading {
    margin-bottom: 3rem;
  }
`;

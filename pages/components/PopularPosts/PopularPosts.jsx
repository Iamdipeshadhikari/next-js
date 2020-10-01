import styled from "styled-components";
import PostCardSecond from "../PostCardSecond/PostCardSecond";
import { SecondaryHeading } from "../../../styles/title";

export default function PopularPosts(props) {
  return (
    <PopularPostsContainer>
      <SecondaryHeading className="heading">
        Popular of the Month
      </SecondaryHeading>
      <div className="content">
        <div className="col-1">
          <PostCardSecond />
        </div>
        <div className="col-1">
          <PostCardSecond />
        </div>
        <div className="col-1">
          <PostCardSecond />
        </div>
      </div>
    </PopularPostsContainer>
  );
}

const PopularPostsContainer = styled.div`
  padding: 5rem 0;
  width: 85%;
  margin: 0 auto;

  .content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .heading {
    margin-bottom: 3rem;
  }

  .col-1 {
    width: 22rem;
    margin-bottom: 1.5rem;
  }
`;

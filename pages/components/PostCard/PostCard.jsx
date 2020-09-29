import styled from "styled-components";
import { PrimaryButton } from "../../../styles/button";

export default function PostCard({
  post: { title, thumbnail, postDate, authorDate, authorName, authorImage },
}) {
  return (
    <PostCardContainer>
      <img src={thumbnail} alt={title} />
      <h1>{title}</h1>
      <div className="authorInfo">
        <img src={authorImage} alt={authorName} />
        <span className="authorName">{authorName}</span>
        <span className="authorDate">{authorDate}</span>
      </div>

      <PrimaryButton className="postDate">
        <i class="fas fa-stopwatch"></i>
        {postDate}
      </PrimaryButton>
    </PostCardContainer>
  );
}

const PostCardContainer = styled.div`
    img{
        height: 2rem;
        width: 2rem;
    }
`;

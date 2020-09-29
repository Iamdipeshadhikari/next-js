import styled from "styled-components";
import { PrimaryButton } from "../../../styles/button";
import { PrimaryColorHeading, NormalHoverText } from "../../../styles/title";

export default function PostCard({
  post: { title, thumbnail, postDate, authorDate, authorName, authorImage },
}) {
  return (
    <PostCardContainer>
      <img className="thumbnail" src={thumbnail} alt={title} />
      <PrimaryColorHeading className="heading">
        <p>{title}</p>
      </PrimaryColorHeading>
      <div className="authorInfo">
        <img src={authorImage} alt={authorName} />
        <NormalHoverText className="authorName">{authorName}</NormalHoverText>
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
  width: 23.5rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;

  .thumbnail {
    width: 100%;
    height: 16rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    object-fit: center;
  }

  .heading {
    margin-bottom: 1rem;

    p {
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  img {
    height: 3rem;
    width: 3rem;
  }

  .authorInfo {
    display: flex;
    align-items: center;

    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }

  .postDate {
    position: absolute;
    right: 3rem;
    top: 16.3rem;
    font-size: 1rem;
    padding: 3px 0.7rem;
    background-color: #fff;
    color: #999;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .authorName {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 2px;
      background-color: #555;
      top: 50%;
      transform: translateY(-50%);
      right: -3rem;
    }
  }

  .authorDate {
    margin-left: 6rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #999;
  }
`;

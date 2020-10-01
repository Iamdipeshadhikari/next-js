import styled from "styled-components";
import { PrimaryButton, TagButton } from "../../../styles/button";
import { PrimaryColorHeading, NormalHoverText } from "../../../styles/title";

export default function PostCard({
  post: {
    title,
    thumbnail,
    postDate,
    authorDate,
    authorName,
    authorImage,
    tag,
  },
}) {
  const getRandomColor = () => {
    const colors = ["#aa96da", "#3f72af", "#f6416c", "#e84545", "#ff9a3c"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const randomColor = getRandomColor();

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
        <i className="fas fa-stopwatch"></i>
        {postDate}
      </PrimaryButton>

      <TagButton
        style={{ backgroundColor: `${randomColor}` }}
        className="postTag"
      >
        <i className="fas fa-laptop-code"></i>
        {tag}
      </TagButton>
    </PostCardContainer>
  );
}

const PostCardContainer = styled.div`
  width: 22.5rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;

  .thumbnail {
    width: 100%;
    height: 15rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    object-fit: center;
  }

  .heading {
    margin-bottom: 1rem;

    p {
      font-size: 1.8rem;
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
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }

  .postDate {
    position: absolute;
    right: 3rem;
    top: 15.2rem;
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
    font-size: 1rem;

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

  .postTag {
    position: absolute;
    left: 3rem;
    top: 15.2rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .authorDate {
    margin-left: 6rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #999;
  }
`;

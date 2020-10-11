import styled from "styled-components";
import { PrimaryButton, TagButton } from "../../../styles/button";
import {
  PrimaryColorHeading,
  NormalHoverText,
  Paragraph,
} from "../../../styles/title";

export default function PostCardSecond(props) {
  const getRandomColor = () => {
    const colors = ["#aa96da", "#3f72af", "#f6416c", "#e84545", "#ff9a3c"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const randomColor = getRandomColor();

  return (
    <PostCardSecondContainer>
      <div className="imageContainer">
        <img className="thumbnail" src="/Images/post1.jpg" alt="title" />
        <PrimaryButton className="postDate">
          <i className="fas fa-stopwatch"></i>
          2hrs
        </PrimaryButton>

        <TagButton
          style={{ backgroundColor: `${randomColor}` }}
          className="postTag"
        >
          <i className="fas fa-laptop-code"></i>
          category
        </TagButton>
      </div>
      <PrimaryColorHeading className="heading">
        <p>some title goes here later</p>
      </PrimaryColorHeading>
      <div className="authorInfo">
        <NormalHoverText className="authorName">
          <span>By</span> Manjil Junior
        </NormalHoverText>
        <span className="authorDate">20 Jan 2020</span>
      </div>

      <Paragraph style={{ marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        molestiae beatae, sapiente eveniet facilis asperiores eligendi voluptate
        velit deserunt iste assumenda nulla sequi harum, fugiat necessitatibus
      </Paragraph>

      <div className="footer">
        <NormalHoverText className="continue">Continue Reading</NormalHoverText>

        <div className="comment">
          <i className="far fa-comments"></i>
          <NormalHoverText>5</NormalHoverText>
        </div>
      </div>
    </PostCardSecondContainer>
  );
}

const PostCardSecondContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .imageContainer {
    position: relative;
  }

  .thumbnail {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    background-size: cover;
    background-position: center;
    object-fit: center;
    height: 15rem;
  }

  .heading {
    margin-bottom: 1rem !important;
    p {
      font-size: 1.8rem;
      text-transform: capitalize;
    }
  }

  .authorInfo {
    display: flex;
    align-items: center;
    margin: 0.7rem 0;
  }

  .postDate {
    position: absolute;
    right: 1.5rem;
    bottom: 0.5rem;
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
    font-size: 1.1rem;
    padding: 0;

    span {
      font-weight: 400;
      color: #999;
      margin-right: 0.5rem;
    }

    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 1px;
      background-color: #000;
      top: 50%;
      transform: translateY(-50%);
      right: -4rem;
    }
  }

  .postTag {
    position: absolute;
    left: 1.5rem;
    bottom: 0.5rem;
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

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 0.5rem 0;
    width: 98%;
    margin: 1rem auto 0 auto;
    border-top: 2px solid #eee;

    p {
      padding: 0;
    }
  }

  .comment {
    padding: 0.5rem 1rem;
    display: flex;
    border-left: 1px solid #eee;
    i {
      font-size: 1.1rem;
      color: #999;
      margin-right: 0.5rem;
    }
  }
`;

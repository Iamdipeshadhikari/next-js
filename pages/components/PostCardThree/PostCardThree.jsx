import styled from "styled-components";
import { PrimaryColorHeading, NormalHoverText } from "../../../styles/title";
import { PrimaryButton } from "../../../styles/button";

export default function PostCardThree() {
  return (
    <PostCardThreeContainer>
      <img
        src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/11/14/15737172127732.jpg"
        alt="Post Title"
      />

      <div className="right">
        <PrimaryColorHeading className="title">
          <p>this is the example of title: how it is working?</p>
        </PrimaryColorHeading>

        <div className="buttons">
          <PrimaryButton className="category">
            <i className="fas fa-laptop-code"></i>
            Category
          </PrimaryButton>

          <PrimaryButton className="date">
            <i className="fas fa-laptop-code"></i>2 Jan 2020
          </PrimaryButton>
        </div>

        <div className="authorInfo">
          <img
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/11/14/15737172127732.jpg"
            alt="Author Name"
          />
          <NormalHoverText className="authorName">Mia Khalifa</NormalHoverText>
          <span className="authorDate">2 Months Ago</span>
        </div>
      </div>
    </PostCardThreeContainer>
  );
}

const PostCardThreeContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.4rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  margin-bottom: 2rem;

  img {
    width: 8rem;
    height: 10rem;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-right: 0.8rem;
  }

  .title {
    line-height: 0.9;

    p {
      font-size: 1.4rem;
      text-transform: capitalize;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .authorInfo {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    img {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }

  .authorName {
    position: relative;
    font-size: 0.8rem;

    &::after {
      content: "";
      position: absolute;
      width: 1.5rem;
      height: 2px;
      background-color: #555;
      top: 50%;
      transform: translateY(-50%);
      right: -1.5rem;
    }
  }

  .authorDate {
    margin-left: 4rem;
    font-size: 1rem;
    font-weight: bold;
    color: #999;
  }

  .buttons {
    button {
      font-size: 0.9rem;
      padding: 2px 7px;
      background-color: #999;

      i {
        font-size: 0.7rem;
      }
    }

    .category {
      margin-right: 1rem;
      transition: all 0.2s ease;

      &:hover {
        background-color: #aa96da;
      }
    }

    .date {
      transition: all 0.2s ease;

      &:hover {
        background-color: #e84545;
      }
    }
  }
`;

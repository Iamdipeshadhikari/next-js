import React from "react";
import styled from "styled-components";

const PostCardSix = () => {
  return (
    <PostCardSixContainer>
      <img
        src="https://i.insider.com/59de38ffc150553f008b4801?width=1100&format=jpeg&auto=webp"
        alt="Emili Cleark"
      />

      <div className="info">
        <h1>Emilia Clerk</h1>

        <div className="info__details">
          <span className="date">
            <i className="fas fa-clock" /> Joined 2 Years Ago
          </span>
          <span className="post">
            <i className="fas fa-pen" /> 6 Posts
          </span>
        </div>
      </div>
    </PostCardSixContainer>
  );
};

export default PostCardSix;

const PostCardSixContainer = styled.div`
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  border-radius: 10rem;
  overflow: hidden;
  margin-bottom: 1.5rem;

  img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    margin-right: 1rem;
  }

  .info {
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      letter-spacing: 0.5px;
      color: #999;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        color: #666;
        transform: translateY(-3px);
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      }
    }

    &__details {
      span {
        font-size: 1rem;
        color: #999;
        margin-right: 0.5rem;
      }

      .date {
        i {
          color: #aa96da;
        }
      }

      .post {
        i {
          color: #f8b195;
        }
      }
    }
  }
`;

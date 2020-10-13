import React from "react";
import styled from "styled-components";
import { NormalHoverText } from "../../../styles/title";

const PostCardFive = (props) => {
  return (
    <PostCardFiveContainer>
      <img
        src="https://www.somagnews.com/wp-content/uploads/2020/09/mia_khalifa_lentes_gafas_ebay.jpg_793492074-696x438.jpg"
        alt="Mia khalifa"
      />

      <div className="info">
        <div className="info__title">
          Bed sincerity yet therefore forfeited his certainty neglected
          questions
        </div>

        {!props.shortReadCard ? (
          <div className="info__details">
            <span className="time">
              <i className="far fa-clock" />4 Months Ago
            </span>
            <span className="likes">
              <i className="far fa-heart" />
              155
            </span>
          </div>
        ) : (
          <div className="info__detailShort">
            by{" "}
            <NormalHoverText className="author">Manjil Junior</NormalHoverText>
            <span className="time">
              <i className="far fa-clock" />3 min
            </span>
          </div>
        )}
      </div>
    </PostCardFiveContainer>
  );
};

export default PostCardFive;

const PostCardFiveContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
    background-size: cover;
    background-position: center;
    object-fit: cover;
  }

  .info {
    &__title {
      color: #999;
      font-size: 1.2rem;
      letter-spacing: 0.3px;
      font-weight: 400;
      margin-bottom: 1rem;
      cursor: pointer;
    }

    &__details {
      display: flex;
      align-items: center;

      .time {
        margin-right: 0.7rem;
        font-size: 0.9rem;

        i {
          font-size: 1rem;
          padding-right: 5px;
          color: #aa96da;
        }
      }

      .likes {
        margin-right: 0.7rem;
        font-size: 0.9rem;

        i {
          font-size: 1rem;
          padding-right: 5px;
          color: #f8b195;
        }
      }
    }

    &__detailShort {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      color: #000;

      .author {
        font-size: 1rem;
        font-weight: 400;
        text-transform: capitalize;
      }

      .time {
        margin-right: 0.7rem;
        font-size: 0.9rem;

        i {
          font-size: 1rem;
          padding-right: 5px;
          color: #aa96da;
        }
      }
    }
  }
`;

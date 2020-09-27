import React, { useState } from "react";
import styled from "styled-components";
import { PrimaryInput } from "../../../../styles/search";
import { PrimaryButton } from "../../../../styles/button";

export default function Search({ close }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContainer>
      <span onClick={close} className="close">
        <i class="fas fa-times"></i>
      </span>
      <div className="content">
        <PrimaryInput>
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search and press Enter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
              <i class="fas fa-search"></i>
            </button>

            {search !== "" && (
              <i
                onClick={() => setSearch("")}
                class="fas fa-times inputClose"
              ></i>
            )}
          </form>
        </PrimaryInput>

        <div className="category">
          <PrimaryButton style={{ fontSize: "1rem" }}>
            Animation (20)
          </PrimaryButton>
          <PrimaryButton
            style={{ backgroundColor: "#aa96da", fontSize: "1rem" }}
          >
            Art & Design (5)
          </PrimaryButton>
          <PrimaryButton
            style={{ backgroundColor: "#2b2e4a", fontSize: "1rem" }}
          >
            Tutorials (12)
          </PrimaryButton>
          <PrimaryButton
            style={{ backgroundColor: "#e84545", fontSize: "1rem" }}
          >
            Algorithms (35)
          </PrimaryButton>
        </div>
      </div>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(255, 247, 243, 0.9);
  height: 100vh;
  width: 100vw;
  padding: 3rem 5rem 1rem 5rem;
  overflow-y: scroll;

  .close {
    display: block;
    float: right;
    height: 3rem;
    width: 3rem;
    background-color: #2e2f33;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 1.7rem;
    }
  }

  .content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45%;
  }

  .category {
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Tablets */
  @media screen and (max-width: 1024px) {
    .content {
      top: 50%;
      width: 55%;
    }
  }

  /* Mobiles */
  @media screen and (max-width: 768px) {
    .content {
      top: 50%;
      width: 70%;
    }
  }

  /* More Small Tablets */
  @media screen and (max-width: 600px) {
    padding: 2rem;
    .content {
      width: 90%;
    }
  }

  /* Mobile Phones */
  @media screen and (max-width: 480px) {
    padding: 1rem;

    .close {
      height: 2rem;
      width: 2rem;
      i {
        font-size: 1rem;
      }
    }
  }
`;

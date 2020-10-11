import React from "react";
import styled from "styled-components";
import SidebarBox from "../SidebarBox/SidebarBox";
import { PrimaryColorHeading } from "../../../styles/title";
import { ThirdButton } from "../../../styles/button";

const Tags = () => {
  return (
    <TagsContainer>
      <SidebarBox>
        <PrimaryColorHeading className="sidebarTags">
          <i class="fas fa-tags" />
          <p>Popular Tags</p>
        </PrimaryColorHeading>

        <TagItems>
          <li>
            <ThirdButton href="#">Reactjs</ThirdButton>
          </li>

          <li>
            <ThirdButton href="#">Gatsby</ThirdButton>
          </li>

          <li>
            <ThirdButton href="#">Redmi Reviews</ThirdButton>
          </li>

          <li>
            <ThirdButton href="#">Personal Advice</ThirdButton>
          </li>

          <li>
            <ThirdButton href="#">Interviews</ThirdButton>
          </li>

          <li>
            <ThirdButton href="#">Data structures</ThirdButton>
          </li>
        </TagItems>
      </SidebarBox>
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  .sidebarTags {
    margin-bottom: 2rem;

    i {
      color: #999;
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

const TagItems = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: .7rem;
    margin-bottom: 1rem;
  }
`;

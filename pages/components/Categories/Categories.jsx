import React from "react";
import styled from "styled-components";
import SidebarBox from "../SidebarBox/SidebarBox";
import { PrimaryColorHeading } from "../../../styles/title";

const Categories = () => {
  return (
    <CategoriesContainer>
      <SidebarBox>
        <PrimaryColorHeading className="sidebarCategory">
          <i className="fas fa-th-large" />
          <p>Explore Categories</p>
        </PrimaryColorHeading>

        <CategoriesItems>
          <li>
            <i className="fas fa-chevron-right" />
            <span>Personal (12)</span>
          </li>

          <li>
            <i className="fas fa-chevron-right" />
            <span>Coding</span>
          </li>

          <li>
            <i className="fas fa-chevron-right" />
            <span>Reviews (5)</span>
          </li>

          <li>
            <i className="fas fa-chevron-right" />
            <span>Tech & Gadgets</span>
          </li>

          <li>
            <i class="fas fa-chevron-right" />
            <span>Others</span>
          </li>
        </CategoriesItems>
      </SidebarBox>
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  .sidebarCategory {
    margin-bottom: 1rem;

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

const CategoriesItems = styled.ul`
  li {
    padding: 1rem 0;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover {
      i {
        transform: translateX(0.5rem);
      }
    }

    i {
      transition: all 0.2s ease;
      font-size: 1.2rem;
      margin-right: 2rem;
      color: #999;
    }

    span {
      transition: all 0.2s ease;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
      color: #999;

      &:hover {
        color: #555;
        letter-spacing: 1px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

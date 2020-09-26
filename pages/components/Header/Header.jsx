import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Backdrop from "../Backdrop/Backdrop";
import { PrimaryButton } from "../../../styles/button";
import { NormalText } from "../../../styles/title";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openSearch = () => {
    setSearch(true);
  };

  const closeSearch = () => {
    setSearch(false);
  };

  return (
    <HeaderContainer>
      <div onClick={openMenu} className="menuIcon">
        <i class="fas fa-bars"></i>
        <NormalText>Menu</NormalText>
      </div>

      <ul className="menuItems">
        <li className="menuItem">
          <Link href="/" className="menuLink">
            Features
          </Link>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            Earnings
          </Link>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            How to
          </Link>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            Reviews
          </Link>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            Art & beauty
          </Link>
        </li>

        <PrimaryButton>
          <i class="fas fa-envelope"></i>
          subscribe
        </PrimaryButton>
      </ul>

      <div onClick={openSearch} className="searchIcon">
        <NormalText>Search</NormalText>
        <i class="fas fa-search"></i>
      </div>

      {/* Hide components */}
      {menu && <Sidebar />}
      {menu && <Backdrop close={closeMenu} />}
      {search && <Search close={closeSearch} />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #fff;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  padding: 0 5rem;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .menuIcon,
  .searchIcon {
    display: flex;
    cursor: pointer;

    i {
      color: #6c6f76;
      font-size: 1.1rem;
    }
  }

  .menuItems {
    display: flex;
    align-items: center;
  }
`;

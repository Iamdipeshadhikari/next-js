import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Backdrop from "../Backdrop/Backdrop";
import { PrimaryButton } from "../../../styles/button";
import { NormalText, NormalHoverText } from "../../../styles/title";

const DROPITEMS = [
  {
    name: "Item 1",
    link: "/",
  },
  {
    name: "Item 1",
    link: "/",
  },
  {
    name: "Item 1",
    link: "/",
  },
];
const DROPITEMSSOCIAL = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    link: "https://www.twitter.com",
  },
];

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
        <i className="fas fa-bars"></i>
        <NormalText>Menu</NormalText>
      </div>

      <ul className="menuItems">
        <li className="menuItem">
          <Link href="/" className="menuLink">
            <NormalHoverText>
              Features
              <i className="fas fa-caret-down"></i>
            </NormalHoverText>
          </Link>

          {/* Dropdown here */}
          <DropdownContainer className="dropdown">
            {DROPITEMSSOCIAL.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  <NormalHoverText className="subItem">
                    {item.name}
                  </NormalHoverText>
                </Link>
              </li>
            ))}
          </DropdownContainer>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            <NormalHoverText>
              Products
              <i className="fas fa-caret-down"></i>
            </NormalHoverText>
          </Link>

          {/* Dropdown */}
          <DropdownContainer className="dropdown">
            {DROPITEMSSOCIAL.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  <NormalHoverText className="subItem">
                    {item.name}
                  </NormalHoverText>
                </Link>
              </li>
            ))}
          </DropdownContainer>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            <NormalHoverText>
              Projects
              <i className="fas fa-caret-down"></i>
            </NormalHoverText>
          </Link>

          {/* Dropdown */}
          <DropdownContainer className="dropdown">
            {DROPITEMSSOCIAL.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  <NormalHoverText className="subItem">
                    {item.name}
                  </NormalHoverText>
                </Link>
              </li>
            ))}
          </DropdownContainer>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            <NormalHoverText>
              Technologies
              <i className="fas fa-caret-down"></i>
            </NormalHoverText>
          </Link>

          {/* Dropdown */}
          <DropdownContainer className="dropdown">
            {DROPITEMS.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  <NormalHoverText className="subItem">
                    {item.name}
                  </NormalHoverText>
                </Link>
              </li>
            ))}
          </DropdownContainer>
        </li>

        <li className="menuItem">
          <Link href="/" className="menuLink">
            <NormalHoverText>Art & Science</NormalHoverText>
          </Link>
        </li>

        <PrimaryButton className="desktopSubscribe">
          <i className="fas fa-envelope"></i>
          subscribe
        </PrimaryButton>
      </ul>

      <PrimaryButton className="mobileSubscribe">
        <i className="fas fa-envelope"></i>
        subscribe
      </PrimaryButton>

      <div onClick={openSearch} className="searchIcon">
        <NormalText>Search</NormalText>
        <i className="fas fa-search"></i>
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

  /* Tablets */
  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
  }

  /* Small Tablets */
  @media screen and (max-width: 800px) {
    .desktopSubscribe {
      display: none;
    }
  }

  /* Mobiles */
  @media screen and (max-width: 768px) {
    padding: 0 3rem;

    .menuItems {
      display: none !important;
    }

    .mobileSubscribe {
      display: inline-block !important;
    }
  }

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

  .menuItem {
    margin: 0 0.7rem;
    position: relative;

    &:hover {
      .dropdown {
        transform: scale(1) translateY(1rem);
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .mobileSubscribe {
    display: none;
  }
`;

const DropdownContainer = styled.ul`
  position: absolute;
  background-color: #fff;
  box-shadow: 2px -3px 15px rgba(0, 0, 0, 0.1);
  width: 12rem;
  border-radius: 0.5rem;
  padding: 1rem 0;
  transition: all 0.3s ease;
  transform: scale(0.8);
  opacity: 0;
  visibility: hidden;

  display: flex;
  flex-direction: column;

  li {
    margin-left: 1rem;
  }

  .subItem {
    padding: 0.5rem 0;
  }
`;

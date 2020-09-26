import styled from "styled-components";
import Link from "next/link";
import { NormalHoverText } from "../../../../styles/title";

export default function Dropdown({ items }) {
  return (
    <DropdownContainer>
      {items.map((item, i) => (
        <li>
          <Link href={item.link}>
            <NormalHoverText className="subItem">{item.name}</NormalHoverText>
          </Link>
        </li>
      ))}
    </DropdownContainer>
  );
}


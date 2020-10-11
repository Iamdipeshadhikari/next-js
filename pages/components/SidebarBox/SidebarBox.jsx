import styled from "styled-components";

export default function SidebarBox(props) {
  return <SidebarContainer>{props.children}</SidebarContainer>;
}

const SidebarContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

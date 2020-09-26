import styled from "styled-components";

export default function Sidebar() {
  return <SidebarContainer>hello</SidebarContainer>;
}

const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  height: 100vh;
  width: 25%;
  padding: 3rem 2rem 1rem 2rem;
  overflow-y: scroll;
`;

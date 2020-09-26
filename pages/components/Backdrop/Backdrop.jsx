import styled from "styled-components";

export default function Backdrop({ close }) {
  return <BackdropContainer onClick={close} />;
}

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 247, 243, 0.5);
  z-index: 999;
`;

import styled from "styled-components";

export default function Advertisement(props) {
  return (
    <AdvertisementContainer style={props.style}>
      Advertisement
    </AdvertisementContainer>
  );
}

const AdvertisementContainer = styled.div`
  background-color: #999;
  width: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

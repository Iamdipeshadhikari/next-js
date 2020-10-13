import React from "react";
import styled from "styled-components";

export default function ScrollToTop(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisible();
    });
  }, [isVisible]);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isVisible) {
    return (
      <ScrollContainer onClick={scrollToTopHandler}>
        <i className="fas fa-arrow-up" />
      </ScrollContainer>
    );
  } else {
    return null;
  }
}

const ScrollContainer = styled.div`
  position: fixed;
  z-index: 200;
  right: 1rem;
  bottom: 2rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  background-color: #f8b195;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    font-size: 1.5rem;
  }
`;

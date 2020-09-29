import Layout from "./components/Layout/Layout";
import styled from "styled-components";
import Slider from "./components/Slider/Slider";

export default function Home() {
  return (
    <Layout headTitle="Home page">
      <HomeContainer>
        <div className="logoContainer">
          <h1>Junior</h1>
          <p className="tag">A Creavitive blog by manjil junior</p>
        </div>
        <Slider />
      </HomeContainer>
    </Layout>
  );
}

const HomeContainer = styled.div`
  padding: 0 1rem;

  .logoContainer {
    width: 100%;
    text-align: center;
    margin-bottom: 0rem;
    padding: 2rem 0;

    h1 {
      font-size: 4rem;
      text-transform: capitalize;
      font-weight: 900;
      color: #000;
    }
    .tag {
      color: #999;
      font-size: 1rem;
      letter-spacing: .5px;
    }
  }
`;

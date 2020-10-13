import Layout from "./components/Layout/Layout";
import styled from "styled-components";
import Slider from "./components/Slider/Slider";
import PopularPosts from "./components/PopularPosts/PopularPosts";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import ExplorePosts from "./components/ExplorePosts/ExplorePosts";
import Advertisement from "./components/Advertisement/Advertisement";
import BottomBlogs from "./components/BottomBlogs/BottomBlogs";
import TopWriters from "./components/TopWriters/TopWriters";
import Instagram from "./components/Instagram/Instagram";
import { Container } from "react-grid-system";

export default function Home() {
  return (
    <Layout headTitle="Home page">
      <HomeContainer>
        <div className="logoContainer">
          <h1>ruki</h1>
          <p className="tag">A Creavitive blog by manjil junior</p>
        </div>
        <Slider />
        <PopularPosts />
        <Container>
          <Advertisement style={{ height: "7rem", marginBottom: "3rem" }} />
        </Container>
        <RecentPosts />
        <Container>
          <Advertisement style={{ height: "7rem", marginBottom: "3rem" }} />
        </Container>
        <ExplorePosts />
        <Container>
          <Advertisement
            style={{ height: "7rem", marginBottom: "3rem", marginTop: "3rem" }}
          />
        </Container>
        <BottomBlogs />
        <Container>
          <TopWriters />
        </Container>
        <Instagram />
      </HomeContainer>
    </Layout>
  );
}

const HomeContainer = styled.div`
  .logoContainer {
    width: 100%;
    text-align: center;
    margin-bottom: 0rem;
    padding: 2rem 0;

    h1 {
      font-size: 9rem;
      font-weight: 900;
      color: #000;
      letter-spacing: -3px;
      line-height: 0.8;
    }
    .tag {
      color: #999;
      font-size: 1rem;
      letter-spacing: 0.5px;
    }
  }
`;

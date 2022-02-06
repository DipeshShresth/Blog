import { Button } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import featured from "../../../Assets/featured.svg";
import LatestBlog from "./LatestBlog";
import Tranding from "./Tranding";
import HomeBlogCollectionPage from "./BlogCollectionPage/HomeBlogCollectionPage";
const Root = styled.div`
  margin-top: 3.5rem;
  height: 80vh;
  padding: 1rem 4rem 0rem 5rem;
  background-color: #f2f4f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 935px) {
    padding: 1rem 2rem 0rem 3rem;
  }
  @media screen and (max-width: 870px) {
    padding: 1rem 1rem 0rem 1rem;
  }
  @media screen and (max-width: 750px) {
    justify-content: center;
  }
`;
const ContentContainer = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 6rem;

  animation: moveright 1s linear 1;
  animation-delay: 0.5s;
  visibility: hidden;
  animation-fill-mode: forwards;

  @media screen and (max-width: 1030px) {
    padding-left: 3rem;
  }
  @media screen and (max-width: 976px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 945px) {
    padding-left: 0rem;
  }

  @keyframes moveright {
    0% {
      transform: translateX(-100px);
      visibility: visible;
    }
    100% {
      transform: translateX(0);
      visibility: visible;
    }
  }

  .startWriting {
    text-transform: none;
    border-radius: 20px;
    background-image: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    animation: textclip 1.5s linear infinite;
    display: inline-block;
  }
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3rem;
  //   background-color: red;
  color: #595c97;
  @media screen and (max-width: 450px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;
const SubTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #7b8698;
  width: 70%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const FeaturedImageContainer = styled.div`
  // display: flex;
  // background: red;
  @media screen and (max-width: 750px) {
    display: none;
  }
  .image {
    margin-right: 6rem;
    height: 25rem;
    animation: zoomin 1s linear 1;
    animation-delay: 0.5s;
    visibility: hidden;
    animation-fill-mode: forwards;
    @media screen and (max-width: 1100px) {
      height: 20rem;
    }
    @media screen and (max-width: 816px) {
      height: 17rem;
    }
    @media screen and (max-width: 770px) {
      height: 15rem;
    }
  }
  @keyframes zoomin {
    0% {
      transform: scale(0.5);
      visibility: visible;
    }
    100% {
      transform: scale(1);
      visibility: visible;
    }
  }
`;
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Root>
        <ContentContainer>
          <Heading>
            <span>Publish your blogs </span>
            <span> and earn.</span>
          </Heading>
          <SubTitle>
            Bloggers is a web application used by millions of bloggers around
            the world.Create and promote your blog, become a popular blogger and
            inspre other people.
          </SubTitle>
          <Button variant="contained" className="startWriting">
            Start Writing
          </Button>
        </ContentContainer>
        <FeaturedImageContainer>
          <img src={featured} alt="featured image" className="image" />
        </FeaturedImageContainer>
      </Root>
      <LatestBlog />
      <HomeBlogCollectionPage />

      <Tranding />
    </>
  );
};

export default Home;

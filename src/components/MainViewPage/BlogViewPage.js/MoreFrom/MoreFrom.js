import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { ImPencil } from "react-icons/im";
import thumbnail from "../thumbnail.jpg";

const Root = styled.div`
  padding: 1rem 4rem 1rem 5rem;
`;

const Heading = styled.div`
  padding-bottom: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  border-bottom: 1px solid #e6e6e6;
  .avater {
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    padding: 0rem;
    margin-right: 0.2rem;
    height: 1.5rem;
    width: 1.5rem;
  }

  .pencil-log {
    font-size: 0.9rem;
  }

  .name {
    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #595c97;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  padding: 1.5rem 0rem 1rem 0rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const InformtionContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   background-color: red;
  width: 10rem;
  .title {
    font-size: 1rem;
    font-weight: 500;
  }
  .writer {
    font-size: 0.9rem;
    color: #737579;
  }
`;
const ThumbnailContainer = styled.div`
  //   margin-left: 0.2rem;
  //   margin-right: 1rem;
  .thumbnail {
    width: 5.5rem;
  }
`;

const EachItemContainer = styled.div`
  display: flex;
  //   justify-content: space-between;
  margin-right: 1rem;
  margin-bottom: 1.5rem;
`;

const MoreFrom = () => {
  return (
    <Root>
      <Heading>
        More From
        <div className="name">
          <Avatar className="avater">
            <ImPencil className="pencil-log" />
          </Avatar>
          Intergra
        </div>
      </Heading>
      <ContentContainer>
        <EachItemContainer>
          <InformtionContainer>
            <span className="title">React with Tailwind CSS hell</span>
            <span className="writer">Mr Dipesh Shrestha</span>
          </InformtionContainer>
          <ThumbnailContainer>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </ThumbnailContainer>
        </EachItemContainer>
        <EachItemContainer>
          <InformtionContainer>
            <span className="title">React with Tailwind CSS hell</span>
            <span className="writer">Mr Dipesh Shrestha</span>
          </InformtionContainer>
          <ThumbnailContainer>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </ThumbnailContainer>
        </EachItemContainer>
        <EachItemContainer>
          <InformtionContainer>
            <span className="title">React with Tailwind CSS hell</span>
            <span className="writer">Mr Dipesh Shrestha</span>
          </InformtionContainer>
          <ThumbnailContainer>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </ThumbnailContainer>
        </EachItemContainer>
        <EachItemContainer>
          <InformtionContainer>
            <span className="title">React with Tailwind CSS hell</span>
            <span className="writer">Mr Dipesh Shrestha</span>
          </InformtionContainer>
          <ThumbnailContainer>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </ThumbnailContainer>
        </EachItemContainer>
        <EachItemContainer>
          <InformtionContainer>
            <span className="title">React with Tailwind CSS hell</span>
            <span className="writer">Mr Dipesh Shrestha</span>
          </InformtionContainer>
          <ThumbnailContainer>
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </ThumbnailContainer>
        </EachItemContainer>
      </ContentContainer>
    </Root>
  );
};

export default MoreFrom;

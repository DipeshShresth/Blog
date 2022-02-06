import React from "react";
import styled from "styled-components";
import { FiTrendingUp } from "react-icons/fi";
import { data } from "./CategoryData";
import image from "./thumbnail.jpg";
import writerImage from "./mypix.jpg";
import Carousel from "react-elastic-carousel";
import add from "../../../Assets/add.PNG";

const Root = styled.div`
  //   padding: 1rem 4rem 1rem 5rem;
  // background-color: #f2f4f8;
  .addSection {
    // padding: 1rem 4rem 0rem 5rem;
    @media screen and (max-width: 750px) {
      padding: 1rem 1rem 0rem 1rem;
    }

    img {
      width: 100%;
    }
  }
`;
const ContentContainer = styled.div``;
const Heading = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 4rem 0rem 5rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 3rem;
  color: #595c97;

  @media screen and (max-width: 750px) {
    padding: 1rem 1rem 0rem 1rem;
  }
  .latest {
    margin-right: 0.5rem;
  }
`;
const BlogContentContainer = styled.div`
  padding: 0rem 2rem 0rem 2rem;
  @media screen and (max-width: 750px) {
    padding: 0rem 1rem 0rem 1rem;
  }
  .rec.rec-arrow {
    font-size: 1.2rem;
    padding: 1rem 1.3rem 1rem 0.7rem !important;
    width: 0rem !important;
    height: 0rem !important;
    min-width: 0rem !important;
    min-height: 0rem !important;
    line-height: 0rem !important;
  }
  .rec.rec-arrow:hover {
    color: #fff;
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
  }

  .rec-dot {
    display: none;
  }

  .itemsDiv {
    // width: 75%;
    // display: flex;
    // background-color: #fff;
    // flex-wrap: wrap;
    // justify-content: space-between;
  }
  .addSection {
    img {
      width: 100%;
    }
  }
  .eachItem {
    border-radius: 5px;
    width: 17rem;
    margin-left: 0.3rem;
    // margin-right: 0.9rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: #595c97;
    -webkit-transition: box-shadow 0.6s ease-out;
    box-shadow: none;
    &:hover {
      -webkit-transition: box-shadow 0.6s ease-out;
      box-shadow: 0 0.5rem 1.2rem rgb(0 0 0 / 20%);
      // background-color: #fff;
    }
  }

  .imageContainer {
    // background-color: red;
    height: 25vh;
    // border-radius: 5px 5px 0px 0px;
  }
  .DeatailMainDiv {
    display: flex;
    margin-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    // align-items: center;
  }
  .writerImageDiv {
    // border: 1px solid red;
  }
  .writerImage {
    border-radius: 50%;
    width: 2.3rem;
    height: 2.3rem;
  }
  .otherDetailDiv {
    display: flex;
    flex-direction: column;
    margin-left: 0.6rem;
  }
  .title {
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
  }
  .writerName {
    font-size: 0.9rem;
    font-weight: 600;
    color: #737373;
    margin-top: 0.2rem;
  }
  .date {
    font-size: 0.9rem;
    font-weight: 600;
    color: #737373;
  }
`;

const Tranding = () => {
  const breakpoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 550,
      itemsToShow: 2,
    },
    {
      width: 768,
      itemsToShow: 3,
    },
    {
      width: 1050,
      itemsToShow: 3,
    },
    {
      width: 1200,
      itemsToShow: 4,
    },
  ];
  return (
    <Root>
      <ContentContainer>
        <Heading>
          <FiTrendingUp className="latest" />
          Trending
        </Heading>
        <BlogContentContainer>
          <div className="itemsDiv">
            <Carousel breakPoints={breakpoints}>
              {data.map((item, index) => {
                return (
                  <div className="eachItem">
                    <div
                      className="imageContainer"
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                    <div className="DeatailMainDiv">
                      <div className="writerImageDiv">
                        <img
                          src={writerImage}
                          alt="writer-image"
                          className="writerImage"
                        />
                      </div>
                      <div className="otherDetailDiv">
                        <span className="title">
                          {item.title.substring(0, 50)}
                        </span>
                        <span className="writerName">{item.witer}</span>
                        <span className="date">
                          {item.date} , {"7 min read"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </BlogContentContainer>
      </ContentContainer>
      <div className="addSection">
        <img src={add} alt="add" />
      </div>
    </Root>
  );
};

export default Tranding;

import React, { useEffect } from "react";
import styled from "styled-components";
import { data } from "./BlogrecommmedateData";
import writerImage from "./mypix.jpg";
import thumbnail from "./thumbnail.jpg";
import MoreFrom from "./MoreFrom/MoreFrom";
import { data1 } from "../../Footer/FooterData";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  FaFacebookF,
  FaLink,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

import add from "../../../Assets/add.PNG";
import smalladd from "../../../Assets/smalladd.PNG";

const Root = styled.div`
  margin-top: 4.1%;

  padding: 1rem 4rem 1rem 5rem;
  background-color: #f2f4f8;

  .MainContainerAddSection {
    width: 26%;
    height: 30vh;
  }
  .RootinnerDiv {
    display: flex;
    // background-color: #fff;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    // padding-left: 6rem;
    // box-shadow: 0 0 0.7142857142857143rem #cccccc;
  }
`;
const MainContainer = styled.div`
  display: flex;
`;
const ImageNameContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeadingDetailContainer = styled.div`
  margin-left: 2rem;
  .imageDetailDiv {
    display: flex;
    align-items: center;
  }
  .writerName {
    color: #1a8917;
    margin-right: 1rem;
    font-size: 0.9rem;
  }

  .title {
    font-size: 3.1rem;
    font-weight: 500;
    color: #595c97;
    margin-bottom: 0.6rem;
  }
  .otherDetail {
    font-size: 0.9rem;
    color: #b6b6b6;
  }
  .writerImage {
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);

    padding: 0.2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
    // border: 1px solid #1a8917;
  }

  .shareContentDiv {
    // background: red;
    padding-left: 18rem;
    width: 100%;
    display: flex;
    // justify-content: flex-end;
  }
  .icon {
    margin-left: 0.3rem;
    background-color: #4d4d4d;
    color: #fff;
    font-size: 0.9rem;
    padding: 0.5rem;
    border-radius: 50%;
    margin-top: 0.3rem;
  }
`;
const DeatailConainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f3f5;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  padding-bottom: 1.5rem;

  .featuredImage {
    width: 100%;
  }
  .deatialAddSectionContainer {
    display: flex;
    margin-bottom: 1rem;
  }
  .detailDiv {
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    -webkit-transition: box-shadow 0.6s ease-out;
    box-shadow: none;
    &:hover {
      -webkit-transition: box-shadow 0.6s ease-out;
      box-shadow: 0 0 0.7142857142857143rem #cccccc;
    }
    line-height: 1.5;
    ]text-align: justify;
    background-color: #fff;
    color: #27292b;
    width: 60%;
    padding: 1rem 2rem 1rem 2rem;
    word-spacing: 3px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    h1 {
      color: #595c97;
    }
  }
  .addSectionDiv {
    // background-color: #fff;

    width: 25%;

    margin-left: 2.5rem;

    span {
      font-size: 1rem;
      font-weight: 700;
      color: #737579;
      font-family: "Roboto", sans-serif;
    }
  }
  .RecommedateItemDiv {
    display: flex;
    margin-top: 0.7rem;
    // background-color: #fff;
    // padding: 0.5rem;
    border-radius: 3px;
    // box-shadow: 0 0 0.7142857142857143rem #cccccc;
    margin-bottom: 1rem;
    img {
      width: 35%;
    }
    .recommendateDetailDiv {
      // background-color: red;
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
      .name {
        font-size: 0.85rem;
      }
      .date {
        font-size: 0.7rem;
        margin-top: 0.3rem;
      }
      .title {
        color: #000;
        margin-top: 0.3rem;
      }
    }
  }

  .addImage {
    width: 100%;
  }
`;

const BlogViewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Root>
        <div className="RootinnerDiv">
          <MainContainer>
            <ImageNameContainer>
              {/* <img
                src={writerImage}
                alt="writer-image"
                className="writerImage"
              />
              <span>Dipesh Shrestha</span> */}
            </ImageNameContainer>
            <HeadingDetailContainer>
              <div className="title">
                Using React with Api nepal nepal nepal
              </div>
              <div className="imageDetailDiv">
                <img
                  src={writerImage}
                  alt="writer-image"
                  className="writerImage"
                />
                <span className="writerName">Dipesh Shrestha</span>
                <span className="otherDetail">
                  Sep 17, 2020 &#8226; 7 Min read &#8226; 114,906 Views
                </span>
              </div>
              <div className="shareContentDiv">
                <FaFacebookF className="icon" />
                <FaTwitter className="icon" />
                <FaLinkedinIn className="icon" />
                <FaLink className="icon" />
              </div>
            </HeadingDetailContainer>
          </MainContainer>
          <div className="MainContainerAddSection">
            add section
            {/* <img src={smalladd} alt="add" /> */}
          </div>
        </div>
      </Root>
      <DeatailConainer>
        <div className="deatialAddSectionContainer">
          <div className="detailDiv">
            <h1> Introduction</h1>
            <img
              src={writerImage}
              alt="writer-image"
              className="featuredImage"
            />
            <p>
              The Bachelor of Information Management is a professional course
              which includes the management education with information system.
              The major goal of BIM is to prepare the IT professionals <br />
              <br />
              proficient in the use of computer and computational technique in
              order to develop effective information system to solve the real
              life problem in the organization or any firm. It is a functional
              program entrusted with effective management of technology in
              business areas.With the completion of BIM program the student will
              exposed to wide variety and choices of employment opprotunity and
              further degree. This program has various diversity such as
              Software Engineer, Programmer, System Designers, Network
              Manager,Database Manager and may others. According to this
              program, student must need to complete the internship for eight
              weeks and prepare the report based on the practical knowledge
              gained during the internship period.
              <br />
              <br />
              The Bachelor of Information Management is a professional course
              which includes the management education with information system.
              The major goal of BIM is to prepare the IT professionals
              proficient in the use of computer and computational technique in
              order to develop effective information system to solve the real
              life problem in the organization or any firm. It is a functional
              program entrusted with effective management of technology in
              business areas.With the completion of BIM program the student will
              exposed to wide variety and choices of employment opprotunity and
              further degree. This program has various diversity such as
              Software Engineer, Programmer, System Designers, Network
              Manager,Database Manager and may others. According to this
              program, student must need to complete the internship for eight
              weeks and prepare the report based on the practical knowledge
              gained during the internship period.
            </p>
          </div>

          <div className="addSectionDiv">
            <div>
              <img src={smalladd} alt="add" />
              <img src={smalladd} alt="add" />
            </div>
            <span>Recommendate</span>

            {data.map((data, index) => {
              return (
                <div className="RecommedateItemDiv" key={index}>
                  <img src={thumbnail} alt="thumbnail" />
                  <div className="recommendateDetailDiv">
                    {/* <span className="name">Dipesh Shrestha</span> */}

                    <span className="title">{data.title}</span>
                    <span className="date">{data.date}</span>
                  </div>
                </div>
              );
            })}

            <div>
              <img src={smalladd} alt="add" />
            </div>
          </div>
        </div>
        <div>
          <img src={add} alt="add" className="addImage" />
        </div>
      </DeatailConainer>
      <MoreFrom />
    </>
  );
};

export default BlogViewPage;

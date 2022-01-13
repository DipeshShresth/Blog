import React from "react";
import styled from "styled-components";
import { data } from "./BlogrecommmedateData";
import writerImage from "./mypix.jpg";
import thumbnail from "./thumbnail.jpg";
const Root = styled.div`
  margin-top: 4.1%;
  border-top: 2px solid red;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem 1rem 5rem;
  background: linear-gradient(180deg, #3f4953 0%, #121518 100%);
  .MainContainerAddSection {
    width: 26%;
    height: 30vh;
    // margin-left: 2rem;
    // background-color: red;
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
  .writerImage {
    width: 5rem;
    border-radius: 50%;
  }
  span {
    color: #f5f5f5;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;
const HeadingDetailContainer = styled.div`
  margin-left: 2rem;
  .title {
    font-size: 3.1rem;
    font-weight: 500;
    color: #f5f5f5;
    margin-bottom: 0.6rem;
  }
  .otherDetail {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;
const DeatailConainer = styled.div`
  // height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f3f5;
  padding-top: 1.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  padding-bottom: 1.5rem;
  .deatialAddSectionContainer {
    display: flex;
    margin-bottom: 1rem;
  }
  .detailDiv {
    border-radius: 3px;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 0 0.7142857142857143rem #cccccc;
    line-height: 1.6rem;
    letter-spacing: 0rem;
    text-align: justify;
    background-color: #fff;
    width: 70%;
    padding: 1rem 1rem 1rem 1rem;
  }
  .addSectionDiv {
    // background-color: #fff;

    width: 25%;

    margin-left: 1rem;

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
        color: #19191a;
        margin-top: 0.3rem;
      }
    }
  }
`;
const BlogViewPage = () => {
  return (
    <>
      <Root>
        <MainContainer>
          <ImageNameContainer>
            <img src={writerImage} alt="writer-image" className="writerImage" />
            <span>Dipesh Shrestha</span>
          </ImageNameContainer>
          <HeadingDetailContainer>
            <div className="title">Using React with Api</div>
            <div>
              <span className="otherDetail">
                Sep 17, 2020 &#8226; 7 Min read &#8226; 114,906 Views
              </span>
            </div>
          </HeadingDetailContainer>
        </MainContainer>
        <div className="MainContainerAddSection">add section</div>
      </Root>
      <DeatailConainer>
        <div className="deatialAddSectionContainer">
          <div className="detailDiv">
            <h1> Introduction</h1>
            <p>
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
            <div>add section</div>
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

            <div>add section</div>
          </div>
        </div>
        <div>add section</div>
      </DeatailConainer>
    </>
  );
};

export default BlogViewPage;

import React from "react";
import styled from "styled-components";
import { data } from "./FooterData";
import { FcGoogle } from "react-icons/fc";
import mount from "./mount.jpg";
const Root = styled.div`
  font-family: "Roboto", sans-serif;
  // margin-top: 10rem;
  // background-color: #506795;
  background-color: #f2f4f8;
  padding: 2rem 6rem 2rem 6rem;
  display: flex;
  justify-content: center;
  aligin-items: center;
  @media screen and (max-width: 1327px) {
    padding: 1rem 1rem 1rem 1rem;
  }
  color: #506795;
  display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // background: linear-gradient(180deg, #3f4953 0%, #121518 100%);
`;

const IconsContainer = styled.div`
  display: flex;
  .img {
    width: 2rem;
  }
  .logo {
    font-size: 2rem;

    margin-left: 1.5rem;
    margin-right: 2rem;
    position: relative;

    top: 0;
    transition: top ease 0.3s;

    &:hover {
      top: -5px;
      // color: #33cc33;
    }
  }
`;
const CopyRightContainer = styled.div`
  // margin-top: 2rem;
  font-size: 0.9rem;
`;
const PolicyContainer = styled.div`
  // margin-top: 1.5rem;
  font-size: 1rem;
  //   background-color: red;
  .PolicyItems {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
const Footer = () => {
  return (
    <Root
    // style={{
    //   backgroundImage: `url(${mount})`,
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <CopyRightContainer>
        Copyright &copy; 2022 Intergra. All rights reserved.
      </CopyRightContainer>
      {/* <PolicyContainer>
        <span className="PolicyItems">Home</span>
        <span className="PolicyItems">Out Story</span>
        <span className="PolicyItems">Sing In</span>
        <span className="PolicyItems">Start Writing</span>
      </PolicyContainer> */}
      {/* <IconsContainer>
        {data.map((data, index) => (
          <div className="logo" key={index}>
            <img
              src={`https://api.statvoo.com/favicon/?url=${data.url}`}
              alt={data.alt}
              className="img"
            />
          </div>
        ))}
      </IconsContainer> */}
    </Root>
  );
};

export default Footer;

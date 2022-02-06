import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { ImPencil } from "react-icons/im";
import TextField from "@mui/material/TextField";
import { FiSearch } from "react-icons/fi";
import BlogCategory from "../BlogCategory/BlogCategory";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Root = styled.div`
  z-index: 1;
  width: 90%;
  font-family: "Roboto", sans-serif;
  // background-color: #20232a;
  background-color: #ffffff;
  padding: 0.5rem 5rem 0.5rem 5rem;
  color: #ffff;
  display: flex;
  position: fixed;
  top: 0;
  box-shadow: 0 4px 10px 0 rgb(20 19 34 / 3%), 0 0 10px 0 rgb(20 19 34 / 2%);
  @media screen and (max-width: 1000px) {
    padding: 0.5rem 5rem 0.5rem 1rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const LogMenuContainer = styled.div`
  // background-color: red;
  width: 80%;
  display: flex;

  .logoMenu-search-containe {
    display: flex;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  // color: #33cc33;
  color: #595c97;
  // @media screen and (max-width: 758px) {
  //   font-size: 1rem;
  // }
  .avater {
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    padding: 0rem;
    margin-right: 0.5rem;
    // @media screen and (max-width: 758px) {
    //   padding: 0rem;
    //   margin-right: 0.2rem;
    //   height: 1.5rem;
    //   width: 1.5rem;
    // }
  }

  .pencil-log {
    font-size: 1rem;
    @media screen and (max-width: 758px) {
      font-size: 0.9rem;
    }
  }
`;
const MenuIitemContainer = styled.div`
  display: flex;
  // background: red;
  align-items: center;
  margin-left: 7rem;
  @media screen and (max-width: 596px) {
    margin-left: 0rem;
  }

  .Button {
    // font-size: 0.9rem;
    height: 1.8rem;
    &:hover {
      color: white;
      background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    }
  }
  .active {
    height: 1.8rem;
    color: white;
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
  }
  @media screen and (max-width: 1258px) {
    margin-left: 2rem;
  }

  .search {
    margin-left: 7rem;
    @media screen and (max-width: 1179px) {
      margin-left: 5rem;
    }
    @media screen and (max-width: 1140px) {
      margin-left: 3rem;
    }
    @media screen and (max-width: 1067px) {
      margin-left: 2rem;
    }
    @media screen and (max-width: 870px) {
      margin-left: 1rem;
    }
    @media screen and (max-width: 970px) {
      display: none;
    }
  }
  .serchInputField {
    width: 15rem;
    @media screen and (max-width: 970px) {
      width: 12rem;
    }
    @media screen and (max-width: 970px) {
      width: 8rem;
    }
  }

  .meunItems {
    color: #595c97;
    margin-right: 2rem;
    @media screen and (max-width: 1050px) {
      margin-right: 1rem;
    }
    @media screen and (max-width: 970px) {
      margin-right: 0.5rem;
    }
    &:hover {
      color: #33cc33;
    }
  }
  .passwordTextFieldDiv {
    // background-color: #434956;
    border: 1px solid #595c97;
    border-radius: 20px;
    // margin-left: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
`;

const SignInWrite = styled.div`
  // background-color: blue;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .signin {
  }
  
    .startWriting {
      // height: 1.8rem;
      font-size:0.8rem;
      text-transform: none;
      border-radius: 20px;
      background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
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
  }
`;
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <Root>
      <LogMenuContainer>
        <Logo>
          <Avatar className="avater">
            <ImPencil className="pencil-log" />
          </Avatar>
          Integra
        </Logo>
        <MenuIitemContainer>
          <span className="meunItems">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              activeClassName="active"
            >
              <Button
                style={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
                className={activeMenu == "home" ? "active" : "Button"}
                onClick={() => {
                  setActiveMenu("home");
                }}
              >
                Home
              </Button>
            </Link>
          </span>
          <span className="meunItems">
            {" "}
            <BlogCategory
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />{" "}
          </span>
          <span className="meunItems">
            {/* /our-story */}
            <Link to="/our-story" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  textTransform: "none",
                }}
                className={activeMenu == "ourStory" ? "active" : "Button"}
                onClick={() => {
                  setActiveMenu("ourStory");
                }}
              >
                Our Story
              </Button>
            </Link>
          </span>
          <div className="search">
            <div className="passwordTextFieldDiv">
              <TextField
                variant="standard"
                type="text"
                required
                fullWidth
                className="serchInputField"
                // autoComplete="pasd"

                autoFocus
                placeholder="Search here"
                // onChange={handleChange}
                // {...formik.getFieldProps("password")}
                InputProps={{
                  style: { fontFamily: "Arial", color: "#595c97" },
                  startAdornment: (
                    <FiSearch
                      style={{
                        marginRight: "0.6rem",
                        color: "#595c97",
                        fontSize: "1.2rem",
                      }}
                    />
                  ),
                  disableUnderline: true,
                }}
              />
            </div>
          </div>
        </MenuIitemContainer>
      </LogMenuContainer>
      <SignInWrite>
        <Button variant="contained" className="startWriting">
          Start Writing
        </Button>
      </SignInWrite>
    </Root>
  );
};

export default Navbar;

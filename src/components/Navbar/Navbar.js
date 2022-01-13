import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { ImPencil } from "react-icons/im";
import TextField from "@mui/material/TextField";
import { FiSearch } from "react-icons/fi";
import BlogCategory from "../BlogCategory/BlogCategory";

const Root = styled.div`
  width: 90%;
  font-family: "Roboto", sans-serif;
  background-color: #20232a;
  padding: 0.5rem 5rem 0.5rem 5rem;
  color: #ffff;
  display: flex;
  position: fixed;
  top: 0;
  // left: 0;
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
  color: #33cc33;
  .avater {
    background-color: #248f24;
    padding: 0rem;
    margin-right: 0.5rem;
  }

  .pencil-log {
    font-size: 1rem;
  }
`;
const MenuIitemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7rem;
  @media screen and (max-width: 1220px) {
    margin-left: 5rem;
  }
  @media screen and (max-width: 1140px) {
    margin-left: 3rem;
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
  }
  .meunItems {
    margin-right: 2rem;
    @media screen and (max-width: 1050px) {
      margin-right: 1rem;
    }
    &:hover {
      color: #33cc33;
    }
  }
  .passwordTextFieldDiv {
    background-color: #434956;
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
  .startWrting {
    font-size: 0.9rem;
    border: 0.13rem solid #248f24;
    border-radius: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.3rem;
    // background: linear-gradient(184.74deg, #05de27 -15.16%, #0e6d0e 42.53%);
    margin-left: 2rem;
    &:hover {
    }
  }
`;
const Navbar = () => {
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
          <span className="meunItems">Home</span>
          <span className="meunItems">
            {" "}
            <BlogCategory />{" "}
          </span>
          <span className="meunItems">Our Story</span>
          <div className="search">
            <div className="passwordTextFieldDiv">
              <TextField
                variant="standard"
                type="text"
                style={{ width: "15rem" }}
                required
                fullWidth
                // autoComplete="pasd"

                autoFocus
                placeholder="Search here"
                // onChange={handleChange}
                // {...formik.getFieldProps("password")}
                InputProps={{
                  style: { fontFamily: "Arial", color: "#fff" },
                  startAdornment: (
                    <FiSearch
                      style={{
                        marginRight: "0.6rem",
                        color: "#fff",
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
        {/* <div className="signin" role="button">
          Sign In
        </div> */}

        <div className="startWrting" role="button">
          Start Writing
        </div>
      </SignInWrite>
    </Root>
  );
};

export default Navbar;

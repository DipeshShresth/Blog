import * as React from "react";
import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
// import { withStyles } from "@material-ui/core/withStyles";
import { data } from "./CategoryData";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import image from "./thumbnail.jpg";
import writerImage from "./mypix.jpg";
import Stack from "@mui/material/Stack";

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Root = styled.div`
  font-family: "Roboto", sans-serif;
  .TabMainDiv {
  }
  .Tabs {
    // background-color: #3c454e;
  }
  .TabsInnerDiv {
  }
  .tab {
    text-transform: none;
  }

  .tabPanelInnerDiv {
    display: flex;
    flex-wrap: wrap;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    margin-right: -1.4rem;
    display: flex;
  }
  .itemsAddSectionDiv {
    width: 100%;
    display: flex;
    justify-content: space-between;
    // background-color: yellow;
  }
  .itemsDiv {
    // width: 75%;
    display: flex;
    // background-color: #fff;
    flex-wrap: wrap;
    justify-content: center;
  }
  .addSection {
  }
  .eachItem {
    border-radius: 5px;
    // border: 1px solid #eaeaea;
    // box-shadow: 0 0.5rem 1.2rem rgb(0 0 0 / 20%);
    width: 17rem;
    margin-left: 0.3rem;
    margin-right: 0.9rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }

    color: #595c97;

    -webkit-transition: box-shadow 0.6s ease-out;
    box-shadow: none;

    &:hover {
      -webkit-transition: box-shadow 0.6s ease-out;
      box-shadow: 0 0.5rem 1.2rem rgb(0 0 0 / 20%);
    }
  }

  .imageContainer {
    // background-color: red;
    height: 25vh;
    // border-radius: 5px 5px 0px 0px;
    @media screen and (max-width: 980px) {
      height: 27vh;
    }
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
    font-size: 0.85rem;
    font-weight: 600;
    color: #737373;
    margin-top: 0.2rem;
  }
  .date {
    font-size: 0.85rem;
    font-weight: 600;
    color: #737373;
  }
  .paginationDiv {
    display: flex;
    justify-content: center;
    width: 100%;
    // background-color: red;
  }
`;
const StyledTab = styled(Tab)({
  // color: "red",
  // backgroundColor: "red",
  // "& .MuiTabPanel-root": {},
});

const StyledTabPanel = styled(TabPanel)({
  // backgroundColor: "red",
  // display: "flex",
  // padding: "0rem",
  // "& .MuiTabPanel-root": {},
});

const useStyles = makeStyles({
  customTabs: {
    "& .Mui-selected": {
      color: "#595c97",
    },
    "& button": {},
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Menutab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPageNumber(0);
  };
  const classes = useStyles();

  //for pagination
  var number = 0;
  const [users, setUsers] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  // const pageCount = Math.ceil(number / usersPerPage);
  // console.log(pagesVisited);

  var num = 0;
  console.log(number);
  const communicationSection = useRef(null);
  return (
    <Root>
      <Box sx={{ width: "100%" }} className="TabMainDiv">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="basic tabs example"
            className={"Tabs" + " " + classes.customTabs}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#595c97",
              },
            }}
          >
            {users.map((item, index) => {
              return (
                <Tab
                  label={item.subCatgory}
                  {...a11yProps(index)}
                  className="tab"
                />
              );
            })}
          </Tabs>
        </Box>
        {users.map((item, index) => {
          number = item.detial.length;
          num = Math.ceil(number / usersPerPage);

          return (
            <StyledTabPanel
              value={value}
              index={index}
              key={index}
              // className="TabPanel"
            >
              <div className="tabPanelInnerDiv">
                <div className="itemsAddSectionDiv">
                  <div className="itemsDiv">
                    {item.detial
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((item, index) => {
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
                            >
                              {/* <img src={image} alt="image" /> */}
                            </div>
                            <div className="DeatailMainDiv">
                              <div className="writerImageDiv">
                                <img
                                  src={writerImage}
                                  alt="writer-image"
                                  className="writerImage"
                                />
                              </div>
                              <div className="otherDetailDiv">
                                <Link
                                  to="/blog-viewpage"
                                  style={{ textDecoration: "none" }}
                                >
                                  <span className="title">
                                    {item.title.substring(0, 55)}
                                  </span>
                                </Link>
                                <span className="writerName">{item.witer}</span>
                                <span className="date">
                                  {item.date} , {"7 min read"}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* <Stack spacing={2}> */}
                  </div>
                  {/* <div className="addSection">add Section</div> */}
                </div>
                <div className="paginationDiv">
                  <Pagination
                    shape="circular"
                    count={num}
                    // count={10}
                    onChange={(event, value) => {
                      setPageNumber(value - 1);
                      window.scroll(0, 950);
                    }}
                    color="primary"
                    showFirstButton={true}
                    showLastButton={true}
                  />
                  {/* </Stack> */}
                </div>
              </div>
            </StyledTabPanel>
          );
        })}
      </Box>
    </Root>
  );
}

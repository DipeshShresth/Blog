import * as React from "react";
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

const Root = styled.div`
  .TabMainDiv {
    display: flex;
  }
  .Tabs {
    // background: linear-gradient(180deg, #3f4953 0%, #121518 100%);
    height: 20rem;
    background-color: #3c454e;

    // overflow: scroll;
    // ::-webkit-scrollbar {
    //   width: 2px;
    // }
  }
  .TabsInnerDiv {
  }
  .tab {
    color: #fff;
    width: 10rem;
    min-height: 0px;
    // font-weight: bold;
    height: 2rem;
    padding-left: 1rem;
    text-transform: none;
    align-items: flex-start;
  }

  .tabPanelInnerDiv {
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  // .tabpanelInnerP {
  //   border: 1px solid black;
  //   // margin-right: 0.8rem;

  //   border-radius: 15px;
  //   padding: 0.1rem 0.5rem 1rem 1rem;
  // }
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
  "& .MuiTabPanel-root": {},
});

const useStyles = makeStyles({
  customTabs: {
    "& .Mui-selected": {
      color: "#5cd65c",
    },
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

export default function CategoryTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <Root>
      <Box sx={{ width: "100%" }} className="TabMainDiv">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            orientation="vertical"
            variant="scrollable"
            scrollButtons={false}
            aria-label="basic tabs example"
            className={"Tabs" + " " + classes.customTabs}
            // inkBarStyle={{ color: "red" }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#248F24",
              },
            }}
          >
            {/* <div className="TabsInnerDiv"> */}
            {data.map((item, index) => {
              return (
                <Tab
                  label={item.category}
                  {...a11yProps(index)}
                  className="tab"
                />
              );
            })}
            {/* </div> */}
          </Tabs>
        </Box>
        {data.map((item, index) => {
          return (
            <StyledTabPanel
              value={value}
              index={index}
              key={index}
              // className="TabPanel"
            >
              <div className="tabPanelInnerDiv">
                {item.subCatgory.map((subCatgory, index) => {
                  return (
                    <Button
                      className="Button"
                      style={{
                        // width: "6rem",
                        height: "1.5rem",
                        borderRadius: "21px",
                        color: "#228E30",
                        marginRight: "0.5rem",
                        marginBottom: "0.5rem",
                        backgroundColor: "#fff",
                        textTransform: "none",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        fontSize: "0.8rem",
                        border: "1px solid #248f24",
                      }}
                      variant="contained"
                    >
                      {subCatgory.title}
                    </Button>
                  );
                })}
              </div>
            </StyledTabPanel>
          );
        })}
        {/* <TabPanel value={value} index={0}>
          Item one
        </TabPanel> */}
      </Box>
    </Root>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { FaThList } from "react-icons/fa";
import CategoryTab from "./CategoryTab";

import styled from "styled-components";

const Root = styled.div``;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  blogIcon: {
    marginRight: "0.3rem",
    fontSize: "0.8rem",
    marginTop: "-0.1rem",
  },

  manuItem: {
    // borderBottom: "1px solid #858796",
  },
  notificationButton: {
    height: "1.8rem",
    color: "#595c97",
    "&:hover": {
      color: "#fff",
      background: "linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%)",
    },
  },
  active: {
    color: "white",
    background: "linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%)",
  },

  categoryMainDiv: {},
}));

export default function BlogCategory(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Root>
      <div className={classes.root}>
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            style={{ textTransform: "none" }}
            className={classes.notificationButton}
            className={
              props.activeMenu == "blog" ? "active" : classes.notificationButton
            }
            onClick={() => {
              props.setActiveMenu("blog");
              handleToggle();
            }}
          >
            <FaThList className={classes.blogIcon} />
            Blog
          </Button>

          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            className="popper"
            style={{
              marginTop: "0.9rem",
              width: "40rem",
              boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.07)",
              borderRadius: "5px",
            }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  {/* <div className={classes.title}>Category</div> */}

                  <ClickAwayListener onClickAway={handleClose}>
                    <div className={classes.categoryMainDiv}>
                      <CategoryTab />
                    </div>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </Root>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { BiCategoryAlt } from "react-icons/bi";
import CategoryTab from "./CategoryTab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  manuItem: {
    borderBottom: "1px solid #858796",
    // marginTop: "-1rem",
  },
  notificationButton: {
    backgroundColor: "transparent",
    color: "#fff",
  },

  title: {
    backgroundColor: "#e6e6ff",
    borderRadius: "4px 4px 0px 0px",

    borderBottom: "solid 1px #e3e6f0",

    // border: "2px solid #4e73df",
    color: "#33CC32",
    display: "flex",
    alignItems: "center",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    fontSize: "0.65rem",
    fontWeight: "700",
  },

  categoryMainDiv: {
    // borderBottom: "1px solid #858796",
    // "&:hover": {
    //   backgroundColor: "#fff",
    // },
  },
}));

export default function BlogCategory() {
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
    <div className={classes.root}>
      <div>
        <Button
          disableRipple="true"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ backgroundColor: "transparent" }}
          className={classes.notificationButton}
        >
          <BiCategoryAlt />
          Blog
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{
            width: "45%",
            zIndex: "100",
            // marginRight: "10%",
            // marginTop: "-0.5rem",
            overflow: "hidden",
            boxShadow: "5px 5px 30px 5px rgba(0, 0, 0, 0.07)",
            // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
                  <di className={classes.categoryMainDiv}>
                    <CategoryTab />
                  </di>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

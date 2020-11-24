import {
    AppBar,
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import React, { useCallback, useContext, useEffect } from "react";
  import { navigate } from "@reach/router";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Navbar = (props: any) => {
    const classes = useStyles();
  
    const logProps = useCallback(() => {
      console.log(props);
    }, [props]);
  
    useEffect(() => {
      logProps();
    }, [logProps]);
  

    const navToHome = () => {
      navigate("/");
    };
  
    return (
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", color: "#002e41" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <Typography
            className={classes.title + " home-button"}
            variant="h6"
            onClick={navToHome}
          >
            SCFSL
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";


const Navbar = () => {
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography variant='h6' className={classes.title} color='inherit'>
                <img scr={} alt='Commerce' height='25px' className={CallMissedSharp.image}/>
                Commerce
            </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
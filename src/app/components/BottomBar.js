import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import BadgeIcon from '@material-ui/icons/AccountBox';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';


const useStyles = makeStyles({
  bottomNavStyle: {
        fontFamily: "Montserrat",
        position: "fixed",
        bottom: "0",
        width: "100%",
        margin: "0px",
        padding: "0px",
        background: "#f7f7f7"
  },
  actionItemStyles: {
    "&$selected": {
      color: "#f06292",
      background: "#f7f7f7"
    },
  },
  selected: {},
});

export default function BottomBar () {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

    return (
      <Toolbar>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.bottomNavStyle}
        >
          <BottomNavigationAction
            classes={{
              root: classes.actionItemStyles,
              selected: classes.selected,
            }}
            label="Categorías"
            icon={<HomeIcon fontSize="large" />}
            component={Link}
            to="/categorias"
          />
          <BottomNavigationAction
            classes={{
              root: classes.actionItemStyles,
              selected: classes.selected,
            }}
            label="Catálogo"
            icon={<BadgeIcon fontSize="large" />}
            component={Link}
            to="/catalogo/1"
          />
          <BottomNavigationAction
            classes={{
              root: classes.actionItemStyles,
              selected: classes.selected,
            }}
            label="Carrito"
            icon={<CartIcon fontSize="large" />}
            component={Link}
            to="/carrito"
          />
        </BottomNavigation>
      </Toolbar>
    );
}

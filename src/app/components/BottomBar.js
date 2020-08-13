import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import BadgeIcon from '@material-ui/icons/AccountBox';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';

import './styles.css'


export default function BottomBar () {

    return (
      <Toolbar>
        <BottomNavigation
          showLabels="true"
          style={{
            fontFamily: "Montserrat",
            position: "fixed",
            bottom: "0",
            width: "100%",
            background: "#f7f7f7",
            margin: "0px",
            padding: "0px",
          }}
        >
          <BottomNavigationAction
            label="Categorías"
            icon={<HomeIcon fontSize="large"/>}
            style={{ color: "#f06292" }}
          />
          <BottomNavigationAction
            label="Catálogo"
            icon={<BadgeIcon fontSize="large"/>}
            style={{ color: "#f06292" }}
          />
          <BottomNavigationAction
            label="Carrito"
            icon={<CartIcon fontSize="large"/>}
            style={{ color: "#f06292" }}
          />
        </BottomNavigation>
      </Toolbar>
    );
}

import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import PhoneIcon from '@material-ui/icons/Phone';
import ExitIcon from '@material-ui/icons/ExitToApp';

import './styles.css'

class Appbar extends Component {
  render () {
    return (
      <AppBar
        position="static"
        style={{
          background: "#f7f7f7",
          border: "1px solid black",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Toolbar>
          <Grid item={true} xs={6}>
          <Typography style={{ fontFamily:"Montserrat",color: "#f06292", fontSize: "25px" }}>
            Cliente Pruebas
          </Typography>
          </Grid>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <IconButton style={{ color: "#f06292" }}>
                <PhoneIcon fontSize="large"/>
            </IconButton>
            <IconButton style={{ color: "#f06292" }}>
                <ExitIcon fontSize="large"/>
            </IconButton>
            </Grid>
        </Toolbar>
      </AppBar>
    );
}
}

export default Appbar;
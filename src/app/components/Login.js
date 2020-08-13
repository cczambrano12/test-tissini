import React, { Component } from "react";
import { responsiveFontSizes } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const logo = require("../../public/resources/logo.c752bf8f.png").default

class Login extends Component {
  state = {
    number: "",
  };

  // Retrieves the list of items from the Express app
  validate =  async (numberP) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        number: numberP,
      })
    })

    const resJson = await res.json() 
    console.log(this.props.changeState)
    if (resJson) {
      this.props.changeState(true);
    }
  };

  onChange = (e) => {
    this.setState({
      //Interpretar el valor del campo como nombre de propiedad
      number: e.target.value,
    });
  };

  onKeyDown = (event) => {
    console.log('oprime tecla')
    if (event.key === 'Enter') {
      this.validate(this.state.number)
    }
  }

  onSubmit = (event) => {
    event.preventDefault(); //Cancela autorefresh
  }

  render() {
    return (
      <div className="layout background" style={{ verticalAlign: "top" }}>
        <div className="container">
          <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
              <div style={{ marginTop: "250px" , textAlign:"center"}}>
                <img src={logo} width="60%" height="auto"/>
                <Typography
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: "20px",
                  }}
                >
                  Ingresa el número de teléfono <br /> de tu asesora
                  independiente
                </Typography>
                <div>
                  <form style={{ padding: "10px" }} onSubmit = {this.onSubmit}>
                    <input
                      type="text"
                      name="number"
                      placeholder="Teléfono"
                      onChange = {this.onChange}
                      onKeyDown={this.onKeyDown}
                      value={this.state.number}
                      style={{
                        border: "2px solid white",
                        borderRadius: "8px",
                        color: "white",
                      }}
                      
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
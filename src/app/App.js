import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


//Componentes
import Login from "./components/Login";
import Wrapper from "./components/WrapperApp";

class App extends Component {
  state = {
    logged: false,
  };

  changeState = (succes) => {
    this.setState({ logged: succes });
  };

  render() {
    // las llaves {} permiten ejecutar codigo JS dentro
    //Llama el componente Tasks dentro de la division pasandole la funcion addTask
      return (
        <div>
          <Router>
            <Route exact path="/">
            {this.state.logged? <Redirect to="/categorias"/>:<Login changeState={this.changeState}/>} />
            </Route>
            <Route exact path="/categorias">
              <Wrapper page={"categorias"}/>
            </Route>
            <Route exact path="/entrega-inmediata">
              <Wrapper page={"entregainmediata"}/>
            </Route>
            <Route path="/catalogo">
              <Wrapper page={"catalogo"}/>
            </Route>
            <Route exact path="/carrito">
              <Wrapper page={"carrito"}/>
            </Route>
          </Router>
        </div>
      );
    
  }
}

export default App;

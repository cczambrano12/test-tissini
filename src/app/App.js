import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


//Componentes
import Login from "./components/Login";
import Wrappapp from "./components/WrapperApp";


class App extends Component {
  
  state = {
    logged:true
  }
  
  
  changeState = (succes) =>{
    this.setState({logged : succes})
  }  

  render() {
    // las llaves {} permiten ejecutar codigo JS dentro
    //Llama el componente Tasks dentro de la division pasandole la funcion addTask
    return (
      <div>
        <Router>
          <Route exact path="/">
            <Login changeState={this.changeState} />
          </Route>
          {this.state.logged && 
            <Route exact path="/catalogo" component={Wrappapp} />
          }
        </Router>
      </div>
    );
  }
}

export default App;

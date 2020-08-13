import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


//Componentes
import Appbar from "./Appbar";
import BottomBar from "./BottomBar";

class WrapperApp extends Component {

  render() {
    // las llaves {} permiten ejecutar codigo JS dentro
    //Llama el componente Tasks dentro de la division pasandole la funcion addTask
    return (
      <div>
        <Router>
          <Route path="/catalogo">
              <Appbar />
              <BottomBar />
          </Route>
        </Router>
      </div>
    );
  }
}

export default WrapperApp;

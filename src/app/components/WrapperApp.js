import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";


//Componentes
import Appbar from "./Appbar";
import BottomBar from "./BottomBar";
import Categorias from "./Categorias";
import EntregaInm from "./EntregaInm";

class WrapperApp extends Component {
  render() {
    // las llaves {} permiten ejecutar codigo JS dentro
    //Llama el componente Tasks dentro de la division pasandole la funcion addTask
    return (
      <div>
        <Appbar />
        <div className="container">
          <div className="row">
            <div className="col s3"> </div>
            <div className="col s6" style={{ padding: "5px" }}>
              {this.props.page == "categorias" ? <Categorias /> : <p />}
              {this.props.page == "entregainmediata" ? <EntregaInm /> : <p />}
              {/* {this.props.page == "catalogo" ? <Catalogo /> : <p />}
              {this.props.page == "carrito" ? <Carrito /> : <p />} */}
            </div>
            <div className="col s3"> </div>
          </div>
        </div>
        <BottomBar />
      </div>
    );
  }
}

export default WrapperApp;

import React, { Component } from "react";
import {  Link } from "react-router-dom";
import './styles.css'

//Components
import CardSlide from "./CardSlide";


const entrega_inmediata = require("../../public/resources/productos-de-entrega-inmediata.e07d1e57.png").default
const recien_llegados = require("../../public/img/categories/newarrivals.png").default



const card1 = require("../../public/img/categories/ropa-interior-prominent.jpg").default
const card2 = require("../../public/img/categories/seamless-prominent.jpg").default
const card3 = require("../../public/img/categories/tapabocas-prominent.jpg").default
const cardsCateg = [card1, card2, card3]

class Categorias extends Component {
  render() {
    return (
      <div>
        <Link to="/entrega-inmediata">
          <img src={entrega_inmediata} width="100%" height="auto" />
          <button className="btn">VER MAS</button>
        </Link>
        <CardSlide cards={cardsCateg} chevronW={20} borderR="20px"/>
        <div>
          <img src={recien_llegados} width="100%" height="auto" />
        </div>
      </div>
    );
  }
}

export default Categorias
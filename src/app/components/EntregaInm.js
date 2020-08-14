import React, { Component } from "react";
import {  Link } from "react-router-dom";
import './styles.css'

//Components
import CardSlide from "./CardSlide";
import ProductSlide from "./ProductSlide";


const card0 = require("../../public/img/products/blackweek/jeans/808530_0.jpg").default
const card1 = require("../../public/img/products/blackweek/jeans/808530_1.jpg").default
const card2 = require("../../public/img/products/blackweek/jeans/808530_2.jpg").default
const card3 = require("../../public/img/products/blackweek/jeans/808530_3.jpg").default
const card4 = require("../../public/img/products/blackweek/jeans/808530_4.jpg").default

const cardsEntrega = [card0, card1, card2, card3, card4]

class EntregaInm extends Component {
  render() {
    return (
      <div>
        <p style={{fontFamily:"Montserrat", fontSize:"22px", color:"#C0BEBE" }}>PRODUCTOS DISPONIBLES</p>
        <ProductSlide cards={cardsEntrega} chevronW={0} borderR="0px"/>
      </div>
    );
  }
}

export default EntregaInm
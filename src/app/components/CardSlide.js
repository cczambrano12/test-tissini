import React, { Component, useState } from "react";
import {  Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';

// const card2 = require("../../public/img/categories/seamless-prominent.jpg").default
// const card3 = require("../../public/img/categories/tapabocas-prominent.jpg").default

function buildCarousel (cardList,bordR) {
    return (cardList.map((p,index) => (
        <div style={{overflow:"hidden"}}>
          <img
            src={p}
            width={"100%"}
            height="auto"
            style={{ borderRadius: bordR}}
            key={index}
          />
        </div>
      )))
}

function CardSlideImage (props) {
    const cardList = props.cards
    const bordR = props.borderR
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    console.log(props.chevronW)
    const chevronWidth = props.chevronW;
  
        return (
          // <CardSlide items={this.props.cards}/>
          <div style={{ padding: `10 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              gutter={10}
              leftChevron={
                <button
                  style={{
                    color: "#f06292",
                    fontSize: "60px",
                    border: "none",
                    background: "none",
                    fontFamily: "Montserat",
                  }}
                >
                  {"<"}
                </button>
              }
              rightChevron={
                <button
                  style={{
                    color: "#f06292",
                    fontSize: "60px",
                    border: "none",
                    background: "none",
                    fontFamily: "Montserat",
                  }}
                >
                  {">"}
                </button>
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              
              {buildCarousel(cardList,bordR)}
            </ItemsCarousel>
          </div>
        );
}



export default CardSlideImage
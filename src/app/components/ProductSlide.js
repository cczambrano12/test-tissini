import React, { Component } from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

//Components
import CardSlide from "./CardSlide";
import CartIcon from '@material-ui/icons/AddShoppingCartOutlined';

class ProductSlide extends Component {
  render() {
    return (
      <Card style={{ height: 400 }}>
        <CardActionArea>
          <CardMedia>
            <CardSlide
              cards={this.props.cards}
              chevronW={this.props.chevronW}
              borderR={this.props.borderR}
            />
          </CardMedia>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            style={{color:"white", backgroundColor:"#f06292", borderRadius:"15px"}}
            startIcon={<CartIcon />}
          >
            AGREGAR
          </Button>
          <p style={{color:"#f06292", fontSize:"30px"}}>$54.95</p>
        </CardActions>
      </Card>
    );
  }
}

export default ProductSlide
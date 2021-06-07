import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default class Carousels extends Component {
  render() {
    return (
      <div>
        <Container>
        <Carousel responsive={responsive}>
  <div><img className="d-block w-80" src="buku1.jpg" alt="1"></img></div>
  <div><img className="d-block w-80" src="buku2.jpg" alt="2"></img></div>
  <div><img className="d-block w-80" src="buku3.jpg" alt="3"></img></div>
  <div><img className="d-block w-80" src="buku5.jpg" alt="5"></img></div>
  <div><img className="d-block w-80" src="buku6.jpg" alt="6"></img></div>
</Carousel>;
</Container>
      </div>
    )
  }
}

import React from "react";
import { Carousel, Container } from "react-bootstrap";
export function Home() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 center-block"
            src={require("./backgroundCar1.png")}
            style={{ margin: "auto" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Everything we consume has a CO2 value.</h3>
            <p>Your Ecological Foodprint.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 center-block"
            src={require("./backgroundCar1.png")}
            style={{ margin: "auto" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>bla</h3>
            <p>bla</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 center-block"
            src={require("./CAR3.png")}
            style={{ margin: "auto" }}
            alt="Third Slide"
          />

          <Carousel.Caption>
            <h3>Start today!</h3>
            <p>Your Ecological Foodprint.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Home;

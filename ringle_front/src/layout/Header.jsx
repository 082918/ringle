import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

function Header() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={8000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;

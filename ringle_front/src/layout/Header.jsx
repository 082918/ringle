import Carousel from "react-bootstrap/Carousel";
import babo from "../babo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={8000}>
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3 className="captionText"> </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3 className="captionTex">Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hdContatiner"> </div>
          <Carousel.Caption>
            <h3 className="captionTex">Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Header;

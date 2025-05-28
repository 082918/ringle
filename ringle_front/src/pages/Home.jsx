import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "../data.jsx";
import "../styles/fonts.css";
import "./Home.css";

function Home() {
  let [product] = useState(data);

  return (
    <>
      <div className="introContainer">
        <div className="intro"> 이런 제품 어때요? </div>
        <hr style={{ width: "500px" }} />
      </div>
      <Container
        className="justify-content-center"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Row className="justify-content-center">
          {product.map((product, index) => (
            <Col md="6" className="contentBox" key={index}>
              <img
                src={`/images/${product.img}`}
                className="contentImg"
                alt={product.item}
              />
              <div className="company">{product.company}</div>
              <div className="item">{product.item}</div>
              <div className="price">{product.price}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;

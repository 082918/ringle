import data from "../data.jsx";
import "./Best.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Best() {
  let [product] = useState(data);
  return (
    <>
      <div className="BestTop">
        <div>
          <h2> 랭킹 </h2>
          <p style={{ marginBottom: "8px" }}>
            이번 주 랭킹! 최근 가장 핫한 상품
          </p>
        </div>
      </div>
      <div className="introContainer">
        <div className="intro"> 이번주 BEST 상품 </div>
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
              <div className="rankCompany">
                <div className="rank"> {index + 1}위 </div>
                <div className="company">{product.company}</div>
              </div>
              <div className="item">{product.item}</div>
              <div className="price">{product.price}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Best;

import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const product = [
  {
    item: "퍼퓸 핸드크림 50ml(4종 택1)",
    company: "체이싱래빗",
    price: "9,900원",
    img: "pro1.png",
  },
  {
    item: "클래식 핸드크림 100ml(4종 택1)",
    company: "비욘드",
    price: "7,500원",
    img: "pro2.png",
  },
  {
    item: "타입넘버 핸드크림 40ml 5종(기획)",
    company: "타임넘버",
    price: "10,800원",
    img: "pro3.png",
  },
  {
    item: "헉슬리",
    company: "퍼퓸 핸드크림(6종 택1)",
    price: "12,000원",
    img: "pro4.png",
  },
  {
    item: "퍼퓸 핸드크림 50ml 7종",
    company: "W.DRESSROOM",
    price: "5,500원",
    img: "pro5.png",
  },
  {
    item: "시어버터 드라이 스킨 핸드크림 30ml",
    company: "록시땅",
    price: "17,000원",
    img: "pro6.png",
  },
  {
    item: "핸드크림1",
    company: "W.DRESSROOM",
    price: "9,900원",
    img: "pro1.png",
  },
  {
    item: "시어버터 드라이 스킨 핸드크림 30ml",
    company: "록시땅",
    price: "17,000원",
    img: "pro1.png",
  },
];

function Home() {
  return (
    <Container
      className="justify-content-center"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <Row className="justify-content-center">
        {product.map((product, index) => (
          <Col md="6" className="contentBox" key={index}>
            <img
              src={`../public/images/${product.img}`}
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
  );
}

export default Home;

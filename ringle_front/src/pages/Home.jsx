import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import pro1 from "../assets/pro1.png";

function Home() {
  return (
    <div className="homeContent">
      <Container fluid>
        {/* ㄴ fluid : 모든 뷰포트 및 기기 크기에서 width : 100% 사용 가능 */}
        <Row>
          <Col lg={3} md={4} sm={6} xs={12} className="content">
            <div className="contentBox">
              <img src={pro1} className="contentImg" />
              <div className="contentName">체이싱래빗 퍼퓸 핸드크림 50ml</div>
              <div className="price"> 9,900 원</div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="content">
            <div className="contentBox">
              <img src="/images/shoes2.png" className="contentImg" />
              <div className="contentName">Red Knit</div>
              <div className="price">10,800 원</div>
            </div>
          </Col>
          <Col lg={3} md={4} sm={6} xs={12} className="content">
            <div className="contentBox">
              <img src="/images/shoes3.png" className="contentImg" />
              <div className="contentName"> 웅냥냥핸드크림 </div>
              <div className="price"> 7,500 원 ~ </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

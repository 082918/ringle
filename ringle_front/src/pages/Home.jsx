import { Container, Row, Col } from "react-bootstrap";
import pro1 from "../assets/pro1.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8} style={{ border: "1px solid black" }}>
            1 of 3
          </Col>
          <Col sm={4} style={{ border: "1px solid black" }}>
            2 of 3
          </Col>
          <Col style={{ border: "1px solid black" }}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

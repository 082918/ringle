import "bootstrap/dist/css/bootstrap.min.css";
// 리액트 부트스트랩 CSS 불러오기
import "./NavBar.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="eNavBar">
        <Container className="eContainer">
          <Navbar.Brand href="#home" className="brandName">
            Ringle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basicNav" />
          <Navbar.Collapse id="basicNav">
            <Nav className="me-auto">
              <Nav.Link href="#Best">베스트</Nav.Link>
              <Nav.Link href="#Best">제품</Nav.Link>
              <Nav.Link href="#Best">기획전</Nav.Link>
              <NavDropdown title="마이페이지" id="basicNavDropdown">
                <NavDropdown.Item href="#action/3.1">장바구니</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">북마크</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">주문배송</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">로그아웃</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

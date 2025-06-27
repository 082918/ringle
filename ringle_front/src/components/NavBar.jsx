import "bootstrap/dist/css/bootstrap.min.css";
// 리액트 부트스트랩 CSS 불러오기
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Login from "../pages/login";
import "./NavBar.css";

function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="eNavBar">
        <Container className="eContainer">
          <Navbar.Brand href="/" className="brandName">
            Ringle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basicNav" />
          <Navbar.Collapse id="basicNav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/best">
                베스트
              </Nav.Link>
              <Nav.Link as={Link} to="/product">
                제품
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/event");
                }}
              >
                기획전
              </Nav.Link>
              <Nav className="test">
                <NavDropdown title="마이페이지" id="basicNavDropdown">
                  <NavDropdown.Item as={Link} to="/cart">
                    장바구니
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/bookmark">
                    북마크
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/orders">
                    주문배송
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logout">
                    로그인
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

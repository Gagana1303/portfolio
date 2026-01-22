import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/logo2.png";
import navIcon3 from '../assets/img/logo3.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gagana-m-r/"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:gaganamr710@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Gagana1303"><img src={navIcon3} alt="Icon" /></a>

            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

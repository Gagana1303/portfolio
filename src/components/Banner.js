import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Web Developer", "Data Science & Machine Learning Enthusiast" ];
  const period = 2000;

  useEffect(() => {
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta(prev => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const ticker = setInterval(tick, delta);
  return () => clearInterval(ticker);
}, [text, delta, isDeleting, loopNum, toRotate, period]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Gagana M R`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Data Science & Machine Learning Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a Computer Science Engineering student with a strong interest in Data Science, Machine Learning, and Web Development. I enjoy solving real-world problems using data-driven approaches and building user-friendly applications. I have hands-on experience in Python, machine learning models, and frontend development, and I am continuously improving my skills through projects and internships.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="hero-image-wrapper">
                  <img src={headerImg} alt="Gagana M R profile photo" className="hero-img"/>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

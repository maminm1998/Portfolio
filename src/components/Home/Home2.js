import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="purple"> Me </span> 
            </h1>
            <p className="home-about-body" style={{fontSize:'45px'}}>
             
              <br /> <h1>Hard working and dedicated MS</h1> 
              <i>
                <b className="purple"> <h3>nutrition science and diet therapy (Top Student).</h3> </b>
              </i>
              <br />
              
              <br /> <h2>Hard working and dedicated MS</h2> 
              <i>
                <b className="purple"> <h4>nutrition science and diet therapy (Top Student).</h4> </b>
              </i>
              <br />
              <br /> <h3>Hard working and dedicated MS</h3> 
              <i>
                <b className="purple"> <h5>nutrition science and diet therapy (Top Student).</h5> </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

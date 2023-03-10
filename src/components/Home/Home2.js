import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import myImage from '../../Assets/tempFileForShare_20230310-173425.png'

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
             
              <br /> <h1>I have one year of experience in  </h1> 
              <i>
                <b className="purple"> <h3>software engineering and am looking for an internship opportunity.</h3> </b>
              </i>
              <br />
              
              <br /> <h2>Hard working and dedicated MS</h2> 
              <i>
                <b className="purple"> <h4>nutrition science and diet therapy (Top Student).</h4> </b>
              </i>
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImage} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} >
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

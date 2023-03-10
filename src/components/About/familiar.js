import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgFigma } from "react-icons/cg";
import {
  
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,DiDart
} from "react-icons/di";
import {
  
  SiFirebase,
  SiAdobexd
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgFigma />
      </Col>
    </Row>
    
  );
}

export default Techstack;

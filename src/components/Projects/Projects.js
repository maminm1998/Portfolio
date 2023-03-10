import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cms from "../../Assets/Projects/CMS.png";
import sabzlearn from "../../Assets/Projects/Sbzlearn.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="Persian CMS"
              description="This is a Persian CMS project where you can add, delete, edit a product (or comment, user, order and discount). Frontend: ReactJS
               & Backend: MySQL"
              ghLink="https://github.com/maminm1998/PersianCMS.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sabzlearn}
              isBlog={false}
              title="SabzLearn"
              description="This project is the same as the Sabzlearn.ir site, which includes the shopping cart and the articles section, and you can also send tickets and comments.
Also, different users are authenticated in it and it is possible to access the purchased packages.
Admin can also manage the content of the site such as courses (discount, price, content, etc.), manage comments and tickets, etc.
Frontend: ReactJs & Backend: MongoDB"
              ghLink="https://github.com/maminm1998/SabzLearn.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

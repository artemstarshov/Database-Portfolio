import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import LR1 from "../../Assets/Projects/LR1.svg";
import LR2 from "../../Assets/Projects/LR2.svg";
import LR3 from "../../Assets/Projects/LR3.svg";
import LR4 from "../../Assets/Projects/LR4.svg";
import LR5 from "../../Assets/Projects/LR5.svg";
import LR6 from "../../Assets/Projects/LR6.svg";
import SR1 from "../../Assets/Projects/SR1.svg";
import SR2 from "../../Assets/Projects/SR2.svg";
import SR3 from "../../Assets/Projects/SR3.svg";
import COMP from "../../Assets/Projects/COMP.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Портфолио по дисциплине <strong className="purple">Базы данных </strong>
        </h1>
        <p style={{ color: "white" }}>
        Старшов Артём Александрович <strong className="purple">4об_ИВТ-2/20</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR1}
              title="Лабораторная работа №1"
              description={
                <div>
                  В данной лабораторной работе необходимо выполнить ряд задач по управлению базой данных с использованием SQL-запросов и административных функций.
                </div>
              }
              ghLink="https://docs.google.com/document/d/1Wm-_SSpVjf1yJFytY9ShzB7XXf71KnYL/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR2}
              title="Лабораторная работа №2"
              description={
                <div>
                  Данная лабораторная работа включает в себя создание нескольких схем баз данных с использованием SQL-запросов с дальнейшим их наполнением, а также создание базы данных на собственном сервере.
                </div>
              }
              ghLink="https://docs.google.com/document/d/1s71gLO84UhhimCUYNaP3dzDAYIZ_ZbN5/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR3}
              title="Лабораторная работа №3"
              description={
                <div>
                  В данной лабораторной работе требуется решить три задачи реляционной алгебры.
                </div>
              }
              ghLink="https://docs.google.com/document/d/1WLHCnaTy7MweQ4juShA3uOAzQIXmFajV/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR4}
              title="Лабораторная работа №4"
              description={
                <div>
                  В данной лабораторной работе требуется решить три задачи реляционной алгебры.
              </div>
              }
              ghLink="https://docs.google.com/document/d/13GECP2esoqXYZFQ3iiKQTDHwk0tS4Yyy/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR5}
              title="Лабораторная работа №5"
              description={
                <div>
                  В данной лабораторнойработе необходимо спроектировать реляционную базу данных на основе исходного набора информации, нормализация которой соответствует НФБК.
                </div>
              }               
              ghLink="https://docs.google.com/document/d/1T1tQe3SKHxxcFmn7QeH8EMtFsNZrlU-p/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LR6}
              title="Лабораторная работа №6"
              description={
                <div>
                  Данная лабораторная работа включает в себя выполнение различных задач по управлению базой данных с использованием SQL-запросов.
                </div>
              } 
              ghLink="https://docs.google.com/document/d/1USHAnoTWtmFA_KyzNoiFx99DA8p0zLek/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SR1}
              title="Самостоятельная работа №1"
              description={
                <div>
                  В данной самостоятельной работе необходимо заполнить таблицу "Обобщённая архитектура баз данных».
                </div>
              } 
              ghLink="https://docs.google.com/document/d/1tCN-VsOzbvLySb1nYPwcZ36URTojNfQQ/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SR2}
              title="Самостоятельная работа №2"
              description={
                <div>
                  В данной самостоятельной работе необходимо собрать данные о разных этапах развития моделей данных.
                </div>
              } 
              ghLink="https://docs.google.com/document/d/1Jcbc4f6hv6qdZjg1TulzNm4oYEoVaN-k/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SR3}
              title="Самостоятельная работа №3"
              description={
                <div>
                  В данной самостоятельной работе необходимо создать схему на основании имеющихся данных.
                </div>
              } 
              ghLink="https://docs.google.com/document/d/1EaTbv6dM-1hqw1nCDRE5oetbJuxF394n/edit?usp=sharing&ouid=103736192184663347135&rtpof=true&sd=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={COMP}
              title="Сертификат"
              description={
                <div>
                  Сертификат об успешном прохождении курса "SQL" на платформе Sololearn.
                </div>
              } 
              ghLink="https://drive.google.com/file/d/1cwcqsxoPHJCnfF-zH6bU4TiPBffDCnUN/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

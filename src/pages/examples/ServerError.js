
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Image, Button, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import ErrorImage from "../../assets/img/illustrations/500.svg";


export default () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={5} className="order-2 order-lg-1 text-center text-lg-left">
              <h1 className="text-primary mt-5">
                Something has gone <span className="fw-bolder">seriously</span> wrong
          </h1>
              <p className="lead my-4">
                It's always time for a coffee break. We should be back by the time you finish your coffee.
          </p>
              <Button as={Link} variant="primary" className="animate-hover" to={Routes.DashboardOverview.path}>
                <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                Go back home
              </Button>
            </Col>
            <Col xs={12} lg={7} className="order-1 order-lg-2 text-center d-flex align-items-center justify-content-center">
              <Image src={ErrorImage} className="img-fluid w-75" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

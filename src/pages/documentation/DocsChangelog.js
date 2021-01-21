
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="changelog">Changelog </h1>
              <p className="fs-5 fw-light">This is the changelog for the new features and bug fixes for Volt React Dashboard</p>

              <p className="fs-5 fw-bold">Version 1.0.0 - January 19, 2021</p>
              <ul className="docs-list">
                <li>Initial release files</li>
              </ul>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

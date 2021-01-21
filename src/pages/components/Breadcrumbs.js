
import React from 'react';
import { Col, Row, Container, Breadcrumb } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";

export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Breadcrumbs</h1>
            <p className="mb-0">
              Use breadcrumbs to indicate the navigational hierarchy of the current page.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>Use the <code>&#x3C;Breadcrumb&#x3E;</code> component to show a clear navigational hierarchy for your users, wherever they may be on a given page. Using the <code>variant</code> modifier props you can update the color of the component.</p>
          }
          scope={{ Row, Col, Breadcrumb }}
          imports={`import { Breadcrumb } from '@themesberg/react-bootstrap';`}
          example={`<Row>
  <Col lg={6}>
    <Breadcrumb listProps={{ className: "breadcrumb-primary breadcrumb-text-light text-white" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-secondary breadcrumb-text-light text-white" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-tertiary breadcrumb-text-light text-white" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-info breadcrumb-text-light text-white" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </Col>
</Row>`}
        />

        <Documentation
          title="Transparent Breadcrumbs"
          description={
            <p>In order to make the <code>&#x3C;Breadcrumb&#x3E;</code> component transparent, all you need to do is add the <code>breadcrumb-transparent</code> modifier class to the parent component.</p>
          }
          scope={{ Row, Col, Breadcrumb }}
          imports={`import { Breadcrumb } from '@themesberg/react-bootstrap';`}
          example={`<Row>
  <Col lg={6}>
    <Breadcrumb listProps={{ className: "breadcrumb-primary breadcrumb-transparent" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-secondary breadcrumb-transparent" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-tertiary breadcrumb-transparent" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>

    <Breadcrumb listProps={{ className: "breadcrumb-info breadcrumb-transparent" }}>
        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  </Col>
</Row>`}
        />
      </Container>
    </article>
  );
};

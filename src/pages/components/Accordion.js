
import React from 'react';
import { Row, Col, Container } from '@themesberg/react-bootstrap';

import AccordionComponent from "../../components/AccordionComponent";
import Documentation from "../../components/Documentation";

export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Accordions</h1>
          <p className="mb-0">
            Use the accordion elements to segment content and show/hide when clicking on tabs.
        </p>
        </Col>
      </Row>

      <Documentation
        title="Example"
        description={
          <p>Use the <code>{`<AccordionComponent>`}</code> component and make sure to set the required props, defaultKey and data, to make it shine. When the title element will be toggled you'll get to see the description.</p>
        }
        scope={{ AccordionComponent }}
        imports={`import AccordionComponent from "src/components/AccordionComponent";`}
        example={`<AccordionComponent
  defaultKey="panel-1"
  data={[
    {
      id: 1,
      eventKey: "panel-1",
      title: "What is the purpose of a FAQ?",
      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
    },
    {
      id: 2,
      eventKey: "panel-2",
      title: "What is a FAQ document?",
      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
    },
    {
      id: 3,
      eventKey: "panel-3",
      title: "What are the top 10 interview questions?",
      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision."
    }
  ]} />`}
      />
    </Container>
  </article>
);

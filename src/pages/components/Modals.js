
import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Modals</h1>
            <p className="mb-0">
              Use modals to develop faster and more interactive user interfaces.
          </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="mb-4">
            <Documentation
              title="Example"
              description={
                <>
                  <p>The <code>&#x3C;Modal&#x3E;</code> component can be used as a way to show extra content on top of the existing UI based on an event. For example, you can use the <code>onClick</code> event from a button component to show a modal by using the <code>setShowDefault(true)</code> function.</p>
                  <p>Additionally, you can use the <code>handleClose</code> event to handle the situation when the modal is being closed.</p>
                </>
              }
              scope={{ Col, Card, Button, Modal, showDefault, setShowDefault, handleClose, useState }}
              imports={`import React, { useState } from "react";
import { Button, Modal } from '@themesberg/react-bootstrap';

const [showDefault, setShowDefault] = useState(false);
const handleClose = () => setShowDefault(false);`}
              example={`<React.Fragment>
  <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Default</Button>

  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title className="h6">Terms of Service</Modal.Title>
      <Button variant="close" aria-label="Close" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
      <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
      <p>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        I Got It
    </Button>
      <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
        Close
    </Button>
    </Modal.Footer>
  </Modal>
</React.Fragment>`}
            />

          </Col>
        </Row>
      </Container>
    </article>
  );
};

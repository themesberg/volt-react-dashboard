
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Card, Toast, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  const [showDefault, setShowDefault] = useState(true);
  const [showPrimary, setShowPrimary] = useState(true);
  const [showTertiary, setShowTertiary] = useState(true);

  const handleCloseDefault = () => setShowDefault(false);
  const handleClosePrimary = () => setShowPrimary(false);
  const handleCloseTertiary = () => setShowTertiary(false);

  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Toasts</h1>
            <p className="mb-0">
              Use toasts to indicate messages.
          </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <>
              <p>Use the <code>&#x3C;Toast&#x3E;</code> component to show messages and notifications to the user. The component is split into two main subcomponents: <code>&#x3C;Toast.Header&#x3E;</code> and <code>&#x3C;Toast.Body&#x3E;</code> where you can add the text that you want.</p>
              <p>You can also use the <code>handleClose</code> function to handle the event of closing the component.</p>
            </>
          }
          scope={{ Card, Toast, Button, useState, FontAwesomeIcon, faBootstrap, showDefault, setShowDefault, handleCloseDefault }}
          imports={`import React, { useState } from 'react';
import { Card, Toast, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

const [showDefault, setShowDefault] = useState(true);
const toggleDefaultToast = () => setShowDefault(!showDefault);`}
          example={`<Toast show={showDefault} onClose={handleCloseDefault} className="my-3">
    <Toast.Header className="text-primary" closeButton={false}>
        <FontAwesomeIcon icon={faBootstrap} />
        <strong className="me-auto ms-2">Volt</strong>
        <small>11 mins ago</small>
        <Button variant="close" size="xs" onClick={handleCloseDefault} />
    </Toast.Header>
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
</Toast>`}
        />

        <Documentation
          title="Colors"
          description={
            <p>If you'd like to customize the appearance of the <code>&#x3C;Toast&#x3E;</code> component, you can easily do so by adding a <code>bg-primary</code>, <code>bg-secondary</code>, and any other <code>bg-*</code> modifier class to the main <code>&#x3C;Toast&#x3E;</code> component.</p>
          }
          scope={{ Toast, Button, useState, FontAwesomeIcon, faBootstrap, showPrimary, setShowPrimary, handleClosePrimary, showTertiary, setShowTertiary, handleCloseTertiary }}
          imports={`import React, { useState } from 'react';
import { Toast, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

const [showPrimary, setShowPrimary] = useState(true);
const [showTertiary, setShowTertiary] = useState(true);

const handleClosePrimary = () => setShowPrimary(false);
const handleCloseTertiary = () => setShowTertiary(false);`}
          example={`<React.Fragment>
  <Toast show={showPrimary} onClose={handleClosePrimary} className="bg-primary text-white my-3">
      <Toast.Header className="text-primary" closeButton={false}>
          <FontAwesomeIcon icon={faBootstrap} />
          <strong className="me-auto ms-2">Themesberg</strong>
          <small>11 mins ago</small>
          <Button variant="close" size="xs" onClick={handleClosePrimary} />
      </Toast.Header>
      <Toast.Body>
          Hello, world! This is a toast message.
      </Toast.Body>
  </Toast>

  <Toast show={showTertiary} onClose={handleCloseTertiary} className="bg-secondary text-white my-3">
      <Toast.Header className="text-primary" closeButton={false}>
          <FontAwesomeIcon icon={faBootstrap} />
          <strong className="me-auto ms-2">Themesberg</strong>
          <small>11 mins ago</small>
          <Button variant="close" size="xs" onClick={handleCloseTertiary} />
      </Toast.Header>
      <Toast.Body>
          Hello, world! This is a toast message.
      </Toast.Body>
  </Toast>
</React.Fragment>`}
        />

      </Container>
    </article>
  );
};

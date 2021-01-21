
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Alert, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";

export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Alerts</h1>
            <p className="mb-0">
              Use alerts to provide contextual feedback to your users based on their input and behaviour.
        </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>The <code>&#x3C;Alert&#x3E;</code> component can be used to show your users error, success, informational or warning messages. Use component properties such as  <code>variant="primary</code> or <code>variant="secondary"</code> to use the colors from the Sass variables:</p>
          }
          scope={{ Alert }}
          imports={`import { Alert } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Alert variant="primary">
    A simple primary alert — check it out!
  </Alert>
  <Alert variant="secondary">
    A simple secondary alert — check it out!
  </Alert>
  <Alert variant="success">
    A simple success alert — check it out!
  </Alert>
  <Alert variant="danger">
    A simple danger alert — check it out!
  </Alert>
  <Alert variant="warning">
    A simple warning alert — check it out!
  </Alert>
  <Alert variant="info">
    A simple info alert — check it out!
  </Alert>
  <Alert variant="light">
    A simple light alert — check it out!
  </Alert>
  <Alert variant="dark">
    A simple dark alert — check it out!
  </Alert>
</React.Fragment>`}
        />

        <Documentation
          title="Dismissable alerts"
          description={
            <p>The <code>&#x3C;Alert&#x3E;</code> component can be used to create an alert component that can be closed by clicking on the close icon by adding the <code>show</code> and <code>onClose</code> properties. Additionally, you can also use the <code>&#x3C;FontAwesomeIcon&#x3E;</code> component to add an icon inside the alert component.</p>
          }
          scope={{ Alert, Button, FontAwesomeIcon, faBullhorn }}
          imports={`import { Alert, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";`}
          example={`function DismissableAlerts() {
  const [hiddenAlerts, setHiddenAlerts] = React.useState([]);

  const onClose = (alertId) => {
    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
    setHiddenAlerts(hiddenAlertsUpdated);
  };

  const shouldShowAlert = (alertId) => (
    hiddenAlerts.indexOf(alertId) === -1
  );

  return(
    <React.Fragment>
      <Alert
        variant="primary"
        show={shouldShowAlert("primary")}
        onClose={() => onClose("primary")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("primary")} />
        </div>
      </Alert>

      <Alert
        variant="secondary"
        show={shouldShowAlert("secondary")}
        onClose={() => onClose("secondary")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("secondary")} />
        </div>
      </Alert>
      
      <Alert
        variant="danger"
        show={shouldShowAlert("danger")}
        onClose={() => onClose("danger")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("danger")} />
        </div>
      </Alert>

      <Alert
        variant="success"
        show={shouldShowAlert("success")}
        onClose={() => onClose("success")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("success")} />
        </div>
      </Alert>

      <Alert
        variant="warning"
        show={shouldShowAlert("warning")}
        onClose={() => onClose("warning")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("warning")} />
        </div>
      </Alert>

      <Alert
        variant="light"
        show={shouldShowAlert("light")}
        onClose={() => onClose("light")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("light")} />
        </div>
      </Alert>

      <Alert
        variant="dark"
        show={shouldShowAlert("dark")}
        onClose={() => onClose("dark")}>

        <div className="d-flex justify-content-between">
          <div>
            <FontAwesomeIcon icon={faBullhorn} className="me-1" />
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          </div>
          <Button variant="close" size="xs" onClick={() => onClose("dark")} />
        </div>
      </Alert>
    </React.Fragment>
  );
}

render( <DismissableAlerts /> );`}
        />
      </Container>
    </article>
  );
};

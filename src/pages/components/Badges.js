
import React from 'react';
import { Col, Row, Badge, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Badges</h1>
          <p className="mb-0">
            Use badges to add extra labeling to alongside titles or to categorize items.
          </p>
        </Col>
      </Row>

      <Documentation
        title="Example"
        description={
          <p>Use the <code>&#x3C;Badge&#x3E;</code> component to show and highlight labeled text. You can update the colors using the following modifier classes (ie. <code>bg-primary</code>, <code>bg-secondary</code>):</p>
        }
        scope={{ Badge }}
        imports={`import { Badge } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <Badge bg="primary" className="me-1">Primary</Badge>
  <Badge bg="secondary" className="me-1">Secondary</Badge>
  <Badge bg="success" className="me-1">Success</Badge>
  <Badge bg="danger" className="me-1">Danger</Badge>
  <Badge bg="warning" text="dark" className="me-1">Warning</Badge>
  <Badge bg="info" className="me-1">Info</Badge>
  <Badge bg="light" text="dark" className="me-1">Light</Badge>
  <Badge bg="dark">Dark</Badge>
</React.Fragment>`}
      />

      <Documentation
        title="Sizing with badges"
        description=
        {
          <p>To update the size of the <code>&#x3C;Badge&#x3E;</code> component you can use the size modified classes, such as <code>badge-md</code> or <code>badge-lg</code>.</p>
        }
        scope={{ Badge }}
        imports={`import { Badge } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <Badge bg="primary" className="me-1">Primary</Badge>
  <Badge bg="secondary" text="dark" className="badge-md me-1">Secondary</Badge>
  <Badge bg="success" className="badge-lg">Success</Badge>
</React.Fragment>`}
      />

      <Documentation
        title="Pill badges"
        description={
          <p>Set the <code>pill</code> on <code>true</code> property to make badges more rounded with a larger border radius.</p>
        }
        scope={{ Badge }}
        imports={`import { Badge } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <Badge pill={true} bg="primary" className="me-1">Primary</Badge>
  <Badge pill={true} bg="secondary" className="me-1">Secondary</Badge>
  <Badge pill={true} bg="success" className="me-1">Success</Badge>
  <Badge pill={true} bg="danger" className="me-1">Danger</Badge>
</React.Fragment>`}
      />

      <Documentation
        title="Notification badges"
        description={
          <p>You can also use the <code>&#x3C;Badge&#x3E;</code> component inside other components, such as buttons, alerts, simple paragraphs.</p>
        }
        scope={{ Button, Badge }}
        imports={`import { Badge, Button } from '@themesberg/react-bootstrap';`}
        example={`<Button variant="primary">Profile <Badge bg="secondary">9</Badge></Button>`}
      />
    </Container>
  </article>
);

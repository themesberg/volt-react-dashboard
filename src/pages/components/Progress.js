
import React from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";
import Progress from "../../components/Progress";

export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Progress</h1>
          <p className="mb-0">
            Use progress bars to indicate percentage based components.
          </p>
        </Col>
      </Row>

      <Documentation
        title="Example"
        description={
          <p>Use the <code>&#x3C;Progress&#x3E;</code> component to show progress bars or loaders for your app. You can set the value of the bar using the <code>value</code> attribute. You can also change the appearance using the <code>variant="*"</code> attributes using the default Bootstrap color classes, such as <code>primary</code>, <code>secondary</code>, <code>danger</code> and so on.</p>
        }
        scope={{ Progress }}
        imports={`import Progress from "src/components/Progress";`}
        example={`<Progress variant="primary" label="Primary color" value={25} />`}
      />

      <Documentation
        title="Color variations"
        description={
          <p>To update the appearance of the <code>&#x3C;Progress&#x3E;</code> component you can use the following classes for the <code>variant</code> attribute. You can also add a label text using the <code>label="lorem ipsum"</code> attribute.</p>
        }
        scope={{ Progress }}
        imports={`import Progress from "src/components/Progress";`}
        example={`<React.Fragment>
  <Progress variant="secondary" label="Secondary color" />
  <Progress variant="tertiary" label="Tertiary color" />
  <Progress variant="dark" label="Dark color" />
  <Progress variant="success" label="Success color" />
  <Progress variant="info" label="Info color" />
  <Progress variant="danger" label="Danger color" />
</React.Fragment>`}
      />

      <Documentation
        title="Sizing"
        description={
          <p>You can also use one of the four available sizes for the <code>&#x3C;Progress&#x3E;</code> updating the <code>size="*"</code> attribute.</p>
        }
        scope={{ Progress }}
        imports={`import Progress from "src/components/Progress";`}
        example={`<React.Fragment>
  <Progress variant="primary" label="XL Progress Bar" size="xl" />
  <Progress variant="secondary" label="LG Progress Bar" size="lg" />
  <Progress variant="tertiary" label="MD Progress Bar" size="md" />
  <Progress variant="info" label="SM Progress Bar" size="sm" />
</React.Fragment>`}
      />
    </Container>
  </article>
);

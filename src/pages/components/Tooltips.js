
import React from 'react';
import { Col, Row, Button, Tooltip, Container, OverlayTrigger } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Tooltips</h1>
            <p className="mb-0">
              Use tooltips to indicate extra content for your users when hovering over an element.
          </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>Use the <code>&#x3C;OverlayTrigger&#x3E;</code> and <code>&#x3C;Tooltip&#x3E;</code> to show extra information when hovering or clicking on a given element. Make sure to wrap both the triggering element (ie. a button) and the <code>&#x3C;Tooltip&#x3E;</code> component in a <code>&#x3C;OverlayTrigger&#x3E;</code> component.</p>
          }
          scope={{ Button, Tooltip, OverlayTrigger }}
          imports={`import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';`}
          example={`<OverlayTrigger
  trigger={['hover', 'focus']}
  overlay={
    <Tooltip>Tooltip on top</Tooltip>
  }>
  <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>
</OverlayTrigger>`}
        />

        <Documentation
          title="Tooltip placement"
          description={
            <p>You can also easily position the <code>&#x3C;Tooltip&#x3E;</code> component in any direction using the <code>placement="*"</code> attribute, where the value can be <code>top</code>, <code>right</code>, <code>bottom</code> or <code>left</code>.</p>
          }
          scope={{ Button, Tooltip, OverlayTrigger }}
          imports={`import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <OverlayTrigger
    placement="top"
    trigger={['hover', 'focus']}
    overlay={
      <Tooltip>Tooltip on top</Tooltip>
    }>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="right"
    trigger={['hover', 'focus']}
    overlay={
      <Tooltip>Tooltip on right</Tooltip>
    }>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on right</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="bottom"
    trigger={['hover', 'focus']}
    overlay={
      <Tooltip>Tooltip on bottom</Tooltip>
    }>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on bottom</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="left"
    trigger={['hover', 'focus']}
    overlay={
      <Tooltip>Tooltip on left</Tooltip>
    }>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on left</Button>
  </OverlayTrigger>
</React.Fragment>`}
        />
      </Container>
    </article>
  );
};

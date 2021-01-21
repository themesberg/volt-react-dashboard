
import React from 'react';
import { Col, Row, Button, Popover, Container, OverlayTrigger } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Popovers</h1>
            <p className="mb-0">
              Use popovers to indicate extra content for your users when clicking on an element.
          </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>The <code>&#x3C;OverlayTrigger&#x3E;</code> and <code>&#x3C;Popover&#x3E;</code> component can be used to show extra information by clicking on a given element. You can set the title and content using the <code>&#x3C;Popover.Title&#x3E;</code> and <code>&#x3C;Popover.Content&#x3E;</code> subcomponents. Make sure you wrap the <code>&#x3C;OverlayTrigger&#x3E;</code> component around the popover and the element that will trigger the event.</p>
          }
          scope={{ Button, Popover, OverlayTrigger }}
          imports={`import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';`}
          example={`<OverlayTrigger
  trigger="click"
  overlay={
    <Popover>
      <Popover.Title>Popover on top</Popover.Title>
      <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
    </Popover>
  }>
  <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>
</OverlayTrigger>`}
        />

        <Documentation
          title="Popover placement"
          description={
            <p>The <code>&#x3C;Popover&#x3E;</code> can also be positioned accordingly, using the <code>placement="*"</code> attribute, where the value can be either <code>top</code>, <code>right</code>, <code>bottom</code> or <code>left</code>.</p>
          }
          scope={{ Button, Popover, OverlayTrigger }}
          imports={`import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <OverlayTrigger
    placement="top"
    trigger="click"
    overlay={
      <Popover>
        <Popover.Title>Popover on top</Popover.Title>
        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
      </Popover>
    }>
    <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="right"
    trigger="click"
    overlay={
      <Popover>
        <Popover.Title>Popover on right</Popover.Title>
        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
      </Popover>
    }>
    <Button variant="secondary" size="sm" className="m-2">Popover on right</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="bottom"
    trigger="click"
    overlay={
      <Popover>
        <Popover.Title>Popover on bottom</Popover.Title>
        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
      </Popover>
    }>
    <Button variant="secondary" size="sm" className="m-2">Popover on bottom</Button>
  </OverlayTrigger>
  <OverlayTrigger
    placement="left"
    trigger="click"
    overlay={
      <Popover>
        <Popover.Title>Popover on left</Popover.Title>
        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
      </Popover>
    }>
    <Button variant="secondary" size="sm" className="m-2">Popover on left</Button>
  </OverlayTrigger>
</React.Fragment>`}
        />
      </Container>
    </article>
  );
};

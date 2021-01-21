
import React from 'react';
import { Row, Col, Card, Container, Alert } from '@themesberg/react-bootstrap';

import Code from "../../components/Code";

export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="quick-start">Quick Start </h1>
              <p className="fs-5 fw-light">This guide will help you get started with Volt React Dashboard</p>

              <p>
                <b>Volt React Dashboard</b> is built on top of <Card.Link href="https://react-bootstrap.github.io/" target="_blank">React Bootstrap</Card.Link> using <a href="https://github.com/facebook/create-react-app/" target="_blank" rel="noopener noreferrer">Create React App</a>.
              </p>
              
              <p>Please follow these steps to install the required technologies:</p>
              
              <h2 className="fs-5 mt-4" id="using-yarn">Using <code>yarn</code></h2>
              <ol className="ps-4 docs-list">
                <li>
                  Install yarn from <Card.Link href="https://classic.yarnpkg.com/en/docs/install" target="_blank">their official page</Card.Link>.
                </li>
                <li>
                  <p>After installing yarn, open a terminal and run <code>yarn install</code> in the main <code>volt</code> folder to download all project dependencies.</p>
                  <Code code="$ yarn install" language="bash" />
                </li>
                <li>
                  <p>Then start the app in development mode by running the following command in terminal:</p>
                  <Code code="$ yarn start" language="bash" />
                </li>
                <li>
                  Open <Card.Link href="http://localhost:3000" target="_blank">http://localhost:3000</Card.Link> to view it in the browser.
                </li>
              </ol>

              <h2 className="fs-5 mt-4" id="using-npm">Using <code>npm</code></h2>
              <ol className="ps-4 docs-list">
                <li>
                  Install Node.js from <Card.Link href="https://nodejs.org/" target="_blank">node.js official page</Card.Link> or using a <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">node.js version manager (nvm for short)</a>.
                  <Alert className="my-4" variant="info"><strong>Important!</strong> Make sure the installed Node version is {`>=`} 8.10 and of npm {`>=`} 5.6</Alert>
                </li>
                <li>
                  <p>After installing node.js, open a terminal and run <code>npm install</code> in the main <code>volt</code> folder to download all project dependencies. You'll find them in the <code>node_modules</code> folder.</p>
                  <Code code="$ npm install" language="bash" />
                </li>
                <li>
                  <p>Then start the app in development mode by running the following command in terminal:</p>
                  <Code code="$ npm start" language="bash" />
                </li>
                <li>
                  Open <Card.Link href="http://localhost:3000" target="_blank">http://localhost:3000</Card.Link> to view it in the browser.
                </li>
              </ol>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

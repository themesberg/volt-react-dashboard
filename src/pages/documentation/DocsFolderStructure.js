
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="file-structure">File structure </h1>
              <p className="fs-5 fw-light">Learn more about the file structure for Volt React Dashboard</p>

              <p className="fs-5 fw-bold">Main folders and files</p>
              <p>At the top level of the project you'll find: </p>
              <ul className="docs-list">
                <li>Three folders: <code>public</code>, <code>src</code> and <code>node_modules</code></li>
                <li>And two files: <code>package.json</code> and <code>README.md</code></li>
              </ul>

              <p className="fs-5 fw-bold">public/ folder</p>
              <p>
                The root folder that gets served up as our react app. The most important file in <code>public</code> folder is the <code>index.html</code> file. You can tweak this file, for example, to set the page title or add some library that may be incompatible with webpack and you have no other option but to include it as a <code>{`<script>`}</code> tag.
              <br />
              Also the <code>{`<script>`}</code> tag with the compiled code will be added to this file automatically during the build process.
            </p>

              <p className="fs-5 fw-bold">src/ folder</p>
              <p>
                In simplest form it’s the app folder that contains all of our react codebase: pages, components, tests, image or scss files.
              <br />
              The structure of the src folder:
            </p>

              <ul className="docs-list">
                <li><code>assets/</code> - all the media assets, such as images, videos, json files or other static files</li>
                <li><code>components/</code> - custom state or stateless <Card.Link href="https://reactjs.org/docs/components-and-props.html#function-and-class-components/" target="_blank">function components</Card.Link> built on top of <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">react-bootstrap library</a> and used throughout the application</li>
                <li><code>data/</code> - files to feed the components that require an array of data (e.g tables, lists or calendar events). This data will in the end be fetched from a backend service.</li>
                <li><code>pages/</code> - carefully built pages to provide all the necessary widgets your startup will require</li>
                <li><code>scss/</code> - holds the variables, mixins and custom component styles developed by Themesberg for Volt React Dashboard</li>
                <li><code>index.js</code> - is the JavaScript entry point</li>
                <li><code>routes.js</code> - exports an object with all the route paths found in Volt React Dashboard</li>
              </ul>

              <p className="fs-5 fw-bold">node_modules/ folder</p>
              <p>The <code>node_modules</code> folder contains external libraries generated based on <code>package.json</code>.</p>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

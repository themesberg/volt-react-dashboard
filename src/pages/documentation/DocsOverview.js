
import React from 'react';
import { Row, Col, Card, Container } from '@themesberg/react-bootstrap';


export default () => (
  <Container className="px-0">
    <Row>
      <Col xs={12} className="p-3">
        <Card>
          <Card.Body>
            <article>
              <h1 className="h2" id="overview">Overview </h1>
              <p className="fs-5 fw-light">Download files for Volt React Dashboard</p>

              <p>Volt React Dashboard is a React.js and Bootstrap 5 powered admin dashboard template featuring components, pages and plugins that you can use to create an awesome and interactive admin interface.</p>
              <p>This product is built using the following widely used technologies:</p>
              <ul className="docs-list">
                <li>Interactive UIs using <Card.Link href="https://reactjs.org/" target="_blank">React</Card.Link></li>
                <li>Bootstrap 5 React Components based on <Card.Link href="https://react-bootstrap.github.io/" target="_blank">react-bootstrap</Card.Link></li>
                <li>Most popular CSS Framework <Card.Link href="https://getbootstrap.com/" target="_blank">Bootstrap</Card.Link></li>
                <li>Awesome CSS preprocessor <Card.Link href="https://sass-lang.com/" target="_blank">Sass</Card.Link></li>
              </ul>

              <h2 id="getting-support">Getting support</h2>
              <p>We offer 6 months of support by default for each purchased template. Please <Card.Link href="https://themesberg.com/contact" target="_blank">contact us</Card.Link> and we&rsquo;ll get back to you in no time!</p>

              <h2 id="community">Community</h2>
              <ul className="docs-list">
                <li>Follow <Card.Link href="https://twitter.com/themesberg" target="_blank">@themesberg on Twitter</Card.Link>.</li>
                <li>Follow <Card.Link href="https://facebook.com/themesberg" target="_blank">Themesberg on Facebook</Card.Link>.</li>
                <li>Read and subscribe to <Card.Link href="https://themesberg.com/blog" target="_blank">The Official Themesberg Blog</Card.Link>.</li>
                <li>Follow latest open source projects on our <Card.Link href="https://github.com/themesberg" target="_blank">Github Page</Card.Link></li>
              </ul>
            </article>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

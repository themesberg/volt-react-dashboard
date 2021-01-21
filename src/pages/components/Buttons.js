
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp, faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Container, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Buttons</h1>
            <p className="mb-0">
              Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <p>The <code>&#x3C;Button&#x3E;</code> component is an important part of the UI that you can use for user actions. If you want to change the appearance of a given button, you can update the modifier props of the <code>variant</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" className="m-1">Primary</Button>
  <Button variant="secondary" className="m-1">Secondary</Button>
  <Button variant="tertiary" className="m-1">Tertiary</Button>
  <Button variant="info" className="m-1">Info</Button>
  <Button variant="success" className="m-1">Success</Button>
  <Button variant="warning" className="m-1">Warning</Button>
  <Button variant="danger" className="m-1">Danger</Button>
  <Button variant="dark" className="m-1">Dark</Button>
  <Button variant="gray" className="m-1">Gray</Button>
  <Button variant="light" className="m-1">Light</Button>
  <Button variant="white" className="m-1">White</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Button sizing"
          description={
            <p>The <code>&#x3C;Button&#x3E;</code> component comes with three main sizing options: <code>sm</code>, default, and <code>lg</code>. In order to change the size of the button you need to set the size using the <code>size</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="primary" size="sm" className="me-1">Small</Button>
  <Button variant="primary" className="me-1">Regular</Button>
  <Button variant="primary" size="lg" className="me-1">Large Button</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Buttons with outline"
          description={
            <p>Instead of a fully colored background, you can also choose to style the <code>&#x3C;Button&#x3E;</code> component to only have an outline border by using the <code>outline-primary</code>, <code>outline-secondary</code> modifier classes inside the <code>variant</code> attribute.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Button variant="outline-primary" className="m-1">Primary</Button>
  <Button variant="outline-secondary" className="m-1">Secondary</Button>
  <Button variant="outline-tertiary" className="m-1">Tertiary</Button>
  <Button variant="outline-info" className="m-1">Info</Button>
  <Button variant="outline-success" className="m-1">Success</Button>
  <Button variant="outline-danger" className="m-1">Danger</Button>
  <Button variant="outline-dark" className="m-1">Dark</Button>
  <Button variant="outline-gray" className="m-1">Gray</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Link buttons"
          description={
            <p>If you want to use the <code>&#x3C;Button&#x3E;</code> component, but without the appearance of a button, just use the <code>bsPrefix="text"</code> attribute to create link styled buttons.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Button bsPrefix="text" href="#primary" variant="primary" className="m-3">Primary</Button>
  <Button bsPrefix="text" href="#secondary" variant="secondary" className="m-3">Secondary</Button>
  <Button bsPrefix="text" href="#tertiary" variant="tertiary" className="m-3">Tertiary</Button>
  <Button bsPrefix="text" href="#info" variant="info" className="m-3">Info</Button>
  <Button bsPrefix="text" href="#success" variant="success" className="m-3">Success</Button>
  <Button bsPrefix="text" href="#danger" variant="danger" className="m-3">Danger</Button>
  <Button bsPrefix="text" href="#dark" variant="dark" className="m-3">Dark</Button>
  <Button bsPrefix="text" href="#gray" variant="gray" className="m-3">Gray</Button>
</React.Fragment>`}
        />

        <Documentation
          title="Buttons with icon"
          description={
            <p>You may want to use icons inside the <code>&#x3C;Button&#x3E;</code> component, which can be done by simply adding a <code>&#x3C;FontAwesomeIcon&#x3E;</code> component inside the button element.</p>
          }
          scope={{ Button, FontAwesomeIcon, faHeart, faThumbsUp }}
          imports={`import { Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";`}
          example={`<React.Fragment>
  <Button variant="outline-primary" className="m-1">
    <FontAwesomeIcon icon={faHeart} className="me-2" /> Primary
  </Button>
  <Button variant="outline-secondary" className="m-1">
    <FontAwesomeIcon icon={faThumbsUp} className="me-2" /> Secondary
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Block level Buttons"
          description={
            <p>Block level buttons are great if you want the button to take up 100% of the width of the parent element. You need to add the <code>w-100</code> class to the component.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<Button variant="secondary" color="dark" className="w-100">Block</Button>`}
        />

        <Documentation
          title="Disabled state"
          description={
            <p>You may want to disable the <code>&#x3C;Button&#x3E;</code> component for various reasons, so you need to add the <code>disabled</code> attribute in order to achieve that.</p>
          }
          scope={{ Button }}
          imports={`import { Button } from '@themesberg/react-bootstrap';`}
          example={`<React.Fragment>
  <Button disabled variant="primary" className="mb-2 me-2">
    Primary button
  </Button>
  <Button disabled variant="secondary" className="mb-2 me-2">
    Button
  </Button>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown buttons"
          description={
            <>
              <p>Use the <code>&#x3C;Dropdown&#x3E;</code> component coupled with the <code>&#x3C;Button&#x3E;</code> component in order to create dropdown items when clicking on a button. The <code> &#x3C;Dropdown.Toggle&#x3E;</code> is the component that will trigger the dropdown menu, while the <code>&#x3C;Dropdown.Menu&#x3E;</code> is the actual menu where you can add the dropdown items.</p>
              <p>The <code>&#x3C;Button&#x3E;</code> component is used either before or after the toggle component, but all of this is wrapped around with the main <code>&#x3C;Dropdown&#x3E;</code> component.</p>
            </>
          }
          scope={{ Button, Dropdown, ButtonGroup, FontAwesomeIcon, faAngleDown }}
          imports={`import { Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";`}
          example={`<React.Fragment>
  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">
    <Button variant="primary">Primary</Button>

    <Dropdown.Toggle split variant="primary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown as={ButtonGroup} className="mb-2 me-2">
    <Dropdown.Toggle split variant="tertiary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown sizing"
          description={
            <p>You may want to use one of the three main sizing options for the <code>&#x3C;Dropdown&#x3E;</code> component, so in order to do that you only need to use the <code>size="md"</code> or <code>size="lg"</code> attributes for the <code>&#x3C;Button&#x3E;</code> component inside the dropdown component.</p>
          }
          scope={{ Button, Dropdown, ButtonGroup, FontAwesomeIcon, faAngleDown }}
          imports={`import { Button, ButtonGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";`}
          example={`<React.Fragment>
  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">
    <Button size="sm" variant="primary">Small</Button>

    <Dropdown.Toggle split variant="primary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">
    <Button variant="secondary">Default</Button>

    <Dropdown.Toggle split variant="secondary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Large</Button>

    <Dropdown.Toggle split variant="tertiary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

        <Documentation
          title="Dropdown direction"
          description={
            <p>If you want to change the direction of the <code>&#x3C;Dropdown&#x3E;</code> component, you can do that by using the <code>direction="*"</code> attribute where you can use <code>up</code>, <code>right</code>, <code>down</code>, or <code>left</code> as attribute values.</p>
          }
          scope={{ Button, Dropdown, ButtonGroup, FontAwesomeIcon, faAngleDown, faAngleUp, faAngleLeft, faAngleRight }}
          imports={`import { Button, ButtonGroup, Dropdown } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";`}
          example={`<React.Fragment>
  <Dropdown drop={faAngleUp} as={ButtonGroup} className="me-2 mb-2">
    <Button size="sm" variant="primary">Up</Button>

    <Dropdown.Toggle split variant="primary">
      <FontAwesomeIcon icon={faAngleUp} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop={faAngleRight} as={ButtonGroup} className="me-2 mb-2">
    <Button variant="secondary">Right</Button>

    <Dropdown.Toggle split variant="secondary">
      <FontAwesomeIcon icon={faAngleRight} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Down</Button>

    <Dropdown.Toggle split variant="tertiary">
      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown drop={faAngleLeft} as={ButtonGroup} className="me-2 mb-2">
    <Button size="lg" variant="tertiary">Left</Button>

    <Dropdown.Toggle split variant="tertiary">
      <FontAwesomeIcon icon={faAngleLeft} className="dropdown-arrow" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#action">Action</Dropdown.Item>
      <Dropdown.Item href="#action">Another action</Dropdown.Item>
      <Dropdown.Item href="#action">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#action">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</React.Fragment>`}
        />

      </Container>
    </article>
  );
};

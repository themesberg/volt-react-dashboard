
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Table, Image, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";

import USAFlag from "../../assets/img/flags/united-states-of-america.svg";
import CanadaFlag from "../../assets/img/flags/canada.svg";
import UKFlag from "../../assets/img/flags/united-kingdom.svg";
import FranceFlag from "../../assets/img/flags/france.svg";
import JapanFlag from "../../assets/img/flags/japan.svg";
import GermanyFlag from "../../assets/img/flags/germany.svg";


export default () => {
  return (
    <article>
      <Container className="px-0">
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">Tables</h1>
            <p className="mb-0">
              Use tables to show more complex amount of data.
            </p>
          </Col>
        </Row>

        <Documentation
          title="Example"
          description={
            <>
              <p>The <code>&#x3C;Table&#x3E;</code> component can be used to show more complex amounts of data. We recommend you to use the local <code>&#x3C;TableRow&#x3E;</code> method and component to build rows for the table and set the columns and props from there.</p>
              <p>In this example, the props from <code>&#x3C;TableRow&#x3E;</code>, such as the <code>country</code>, <code>countryIcon</code>, <code>value</code>, and <code>percentage</code> are being set as props. After that, the <code>&#x3C;TableRow&#x3E;</code> components are being added in the final <code>&#x3C;Table&#x3E;</code> rendering.</p>
            </>
          }
          scope={{ Image, Table, FontAwesomeIcon, faAngleDown, faAngleUp, USAFlag, CanadaFlag, UKFlag, FranceFlag, JapanFlag, GermanyFlag }}
          imports={`import { Image, Table } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import USAFlag from "src/assets/img/flags/united-states-of-america.svg";
import CanadaFlag from "src/assets/img/flags/canada.svg";
import UKFlag from "src/assets/img/flags/united-kingdom.svg";
import FranceFlag from "src/assets/img/flags/france.svg";
import JapanFlag from "src/assets/img/flags/japan.svg";
import GermanyFlag from "src/assets/img/flags/germany.svg";`}
          example={`<Table>
  <thead className="thead-light">
    <tr>
      <th className="border-0">Country</th>
      <th className="border-0">All</th>
      <th className="border-0">All Change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border-0">
        <a href="#Unites States" className="d-flex align-items-center">
          <Image roundedCircle src={USAFlag} className="me-2 image image-small" alt="Unites States" />
          <div><span className="h6">Unites States</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">106</td>
      <td className="border-0 text-danger">
        <FontAwesomeIcon icon={faAngleDown} className="me-1" />
        <span className="fw-bold">5</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#Canada" className="d-flex align-items-center">
          <Image roundedCircle src={CanadaFlag} className="me-2 image image-small" alt="Canada" />
          <div><span className="h6">Canada</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">76</td>
      <td className="border-0 text-success">
        <FontAwesomeIcon icon={faAngleUp} className="me-1" />
        <span className="fw-bold">17</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#United Kingdom" className="d-flex align-items-center">
          <Image roundedCircle src={UKFlag} className="me-2 image image-small" alt="United Kingdom" />
          <div><span className="h6">United Kingdom</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">147</td>
      <td className="border-0 text-success">
        <FontAwesomeIcon icon={faAngleUp} className="me-1" />
        <span className="fw-bold">10</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#France" className="d-flex align-items-center">
          <Image roundedCircle src={FranceFlag} className="me-2 image image-small" alt="France" />
          <div><span className="h6">France</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">112</td>
      <td className="border-0 text-success">
        <FontAwesomeIcon icon={faAngleUp} className="me-1" />
        <span className="fw-bold">3</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#Japan" className="d-flex align-items-center">
          <Image roundedCircle src={JapanFlag} className="me-2 image image-small" alt="Japan" />
          <div><span className="h6">Japan</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">115</td>
      <td className="border-0 text-danger">
        <FontAwesomeIcon icon={faAngleDown} className="me-1" />
        <span className="fw-bold">12</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#Germany" className="d-flex align-items-center">
          <Image roundedCircle src={GermanyFlag} className="me-2 image image-small" alt="Germany" />
          <div><span className="h6">Germany</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">220</td>
      <td className="border-0 text-danger">
        <FontAwesomeIcon icon={faAngleDown} className="me-1" />
        <span className="fw-bold">56</span>
      </td>
    </tr>
  </tbody>
</Table>`}
        />
      </Container>
    </article>
  );
};
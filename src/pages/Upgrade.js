import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faDownload, faCheckCircle, faRocket, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button } from '@themesberg/react-bootstrap';
import { Table } from '@themesberg/react-bootstrap';

export default () => {
    return (
        <>
            <Row className="mt-lg-5 mt-4 d-flex justify-content-center">
                <Col xl={8}>
                    <h1 className="text-center fw-bolder">Upgrade to Pro <FontAwesomeIcon icon={faRocket} className="ms-1" /></h1>
                    <p className="text-center lead mb-lg-5 mb-4">Looking to take React development to the next level? Check out the premium version of Volt React Dashboard.</p>
                    <Table className="comparison-table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th className="border-0"></th>
                                <th className="border-0"><h6 className="fw-bolder">What is in demo?</h6></th>
                                <th className="border-0 fw-bolder"><h6 className="fw-bolder">What is in Pro version?</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-0">React Components</td>
                                <td className="border-0">100</td>
                                <td className="border-0">200+</td>
                            </tr>
                            <tr>
                                <td className="border-0">Dashboard Pages</td>
                                <td className="border-0">10</td>
                                <td className="border-0">20</td>
                            </tr>
                            <tr>
                                <td className="border-0">Customized Plugins</td>
                                <td className="border-0">2</td>
                                <td className="border-0">6</td>
                            </tr>
                            <tr>
                                <td className="border-0">Sass Source Files</td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0">Documentation</td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0">Advanced Sidebar</td>
                                <td className="border-0"><FontAwesomeIcon icon={faTimesCircle} className="ms-1 text-danger" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0">Calendar</td>
                                <td className="border-0"><FontAwesomeIcon icon={faTimesCircle} className="ms-1 text-danger" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0">Mapbox</td>
                                <td className="border-0"><FontAwesomeIcon icon={faTimesCircle} className="ms-1 text-danger" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0">Tech Support</td>
                                <td className="border-0"><FontAwesomeIcon icon={faTimesCircle} className="ms-1 text-danger" /></td>
                                <td className="border-0"><FontAwesomeIcon icon={faCheckCircle} className="ms-1 text-success" /></td>
                            </tr>
                            <tr>
                                <td className="border-0"></td>
                                <td className="border-0">
                                    <Button href="https://themesberg.com/product/dashboard/volt-react" target="_blank" variant="primary" className="m-0 mt-3 mb-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
                                </td>
                                <td className="border-0">
                                    <Button href="https://demo.themesberg.com/volt-pro-react/#/" target="_blank" variant="secondary" className="m-0 mt-3">Demo Volt React Pro <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );
};

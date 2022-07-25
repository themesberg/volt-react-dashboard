import React, { useRef, useEffect, useState } from "react";

import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import {
    Col,
    Row,
    Card,
    Button,
    FormCheck,
    Container,
} from "react-bootstrap";

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

import {
    faCameraRetro,
    faWeightHanging,
    faAngleLeft,
    faEnvelope,
    faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

export default () => {
    var fileInput = document.getElementById('weight-collector');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    window.onload = function () {
        var fileInput = document.getElementById('weight-collector');
        var fileDisplayArea = document.getElementById('fileDisplayArea');

        fileInput.addEventListener('change', function (e) {
            var file = fileInput.files[0];
            var imagetype = /image.*/;
            if (file.type.match(imagetype)) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    fileDisplayArea.innerHTML = "";
                    var img = new Image();
                    img.src = reader.result;
                    fileDisplayArea.appendChild(img);
                }
                reader.readAsDataURL(file);
            } else {
                fileDisplayArea.innerHTML = "File not supported!";
            }
        });
    }


    return (
        <main>
            <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <p className="text-center">
                        <Card.Link
                            as={Link}
                            to={Routes.DashboardOverview.path}
                            className="text-gray-700"
                        >
                            Back to
                            homepage
                        </Card.Link>
                    </p>
                    <Row
                        className="justify-content-center form-bg-image"
                        style={{ backgroundImage: `url(${BgImage})` }}
                    >
                        <Col
                            xs={12}
                            className="d-flex align-items-center justify-content-center"
                        >
                            <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <div className="text-center text-md-center mb-4 mt-md-0">
                                    {/* Header */}
                                    <h3 className="mb-0">Recycler Confirmation</h3>
                                </div>
                                <Form className="mt-4">
                                    <div className="mt-3 mb-4 text-center"></div>
                                    {/* Weight */}
                                    <Form.Group id="recyclingfac" className="mb-4">
                                        <Form.Label>Recycling Facility</Form.Label>
                                        <InputGroup>
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Dropdown"
                                                id="input-group-dropdown-2"
                                                align="end">
                                                <Dropdown.Item href="#">Facility 1</Dropdown.Item>
                                                <Dropdown.Item href="#">Facility 2</Dropdown.Item>
                                                <Dropdown.Item href="#">Facility 3</Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Control aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group id="weight" className="mb-4">
                                        <Form.Label>Weight of Waste Received (in Kgs)</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text>
                                            
                                            </InputGroup.Text>

                                            <Form.Control
                                                autoFocus
                                                required
                                                type="weight"
                                                placeholder="100"
                                            />
                                        </InputGroup>
                                        <div class="ml-5">
                                            <Button>
                                                <input
                                                    type="file"
                                                    id="weight-collector"
                                                    name="weight-collector"
                                                    accept="image/*"
                                                    capture="environment"
                                                ></input>

                                     
                                            </Button>
                                        </div>
                                        {/* Camera */}
                                    </Form.Group>
                                    <Form.Group id="processingMethod" className="mb-4">
                                        <Form.Label>Processing Method</Form.Label>
                                        <InputGroup>
                                            <DropdownButton
                                                variant="outline-secondary"
                                                title="Dropdown"
                                                id="input-group-dropdown-2"
                                                align="end"
                                            >
                                                <Dropdown.Item href="#">Method 1</Dropdown.Item>
                                                <Dropdown.Item href="#">Method 2</Dropdown.Item>
                                                <Dropdown.Item href="#">Method 3</Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Control aria-label="Text input with dropdown button" />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group id="imageWeight" className="mb-4">
                                        <Form.Label>Images of Weight Received</Form.Label>
                                        <div class="ml-5">
                                            <Button>
                                                <input
                                                    type="file"
                                                    id="weight-collector"
                                                    name="weight-collector"
                                                    accept="image/*"
                                                    capture="environment"
                                                ></input>

                                          
                                            </Button>
                                        </div>
                                        {/* Camera */}
                                    </Form.Group>
                                    <Form.Group id="vehicle" className="mb-4">
                                        <Form.Label>Vehicle Number</Form.Label>

                                        <InputGroup>

                                            <Form.Control
                                                autoFocus
                                                required
                                                placeholder="KAXX 00 1234"
                                            />
                                        </InputGroup>


                                        <Button>
                                            <input
                                                type="file"
                                                id="weight-collector"
                                                name="weight-collector"
                                                accept="image/*"
                                                capture="environment"
                                            ></input>

                                    
                                        </Button>


                                        {/* Camera */}
                                    </Form.Group>
                                    {/* Summary */}
                                    <Button variant="primary" type="submit" className="w-100">
                                        Summary
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

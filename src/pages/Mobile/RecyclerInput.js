import React, { useRef, useEffect, useState } from "react";

import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import {
  faFacebookF,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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

  window.onload = function() {
    var fileInput = document.getElementById('weight-collector');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
      // Put the rest of the demo code here.
      var file = fileInput.files[0];
      var imagetype = /image.*/;
      if (file.type.match(imagetype)) {
        var reader = new FileReader();
        reader.onload = function(e){
          fileDisplayArea.innerHTML = "";
          var img = new Image();
          img.src = reader.result;
          fileDisplayArea.appendChild(img);
        }
        reader.readAsDataURL(file);
    }else{
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
              Back to homepage
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
                  <h3 className="mb-0">Recyler Input</h3>
                </div>
                <Form className="mt-4">
                  <div className="mt-3 mb-4 text-center"></div>
                  <div className=" justify-content-center my-4">
                    {/* Weight */}
                    <Form.Group id="weight" className="mb-4">
                      <Form.Label>Weight of Collected waste</Form.Label>
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
                       {/* Camera */}
                    </Form.Group>
                    <Form.Group id="weight" className="mb-4">
                      <Form.Label>Picture of Weight</Form.Label>
                      <input
                        type="file"
                        id="weight-collector"
                        name="weight-collector"
                        accept="image/*"
                        capture="environment"
                      ></input>
                       <div id="fileDisplayArea"></div> 
              


                     
                    </Form.Group>
                    {/* <div classname="camera">
                     <video ref={videoref}></video>
                    <Button
                      variant="outline-light"
                      className="btn-icon-only btn-pil text-dark"
                    >
                      SNAP!
                   
                    </Button>
                    </div>
                    <div classname={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                      <canvas ref={photoref}>
                        <button>
                          CLOSE!
                        </button>
                      </canvas>
                    </div> */}
                  </div>

                  {/* Type of Plastic */}
                  <Form.Group id="typeOfPlastic" className="mb-4">
                    <Form.Label>Type of Plastic </Form.Label>
                    <InputGroup>
                      <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item href="#">Pla-Plastic</Dropdown.Item>
                        <Dropdown.Item href="#">Pla-Plastic</Dropdown.Item>
                        <Dropdown.Item href="#">Pla-Plastic</Dropdown.Item>
                      </DropdownButton>
                      <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                  </Form.Group>
                  {/* Recycling Facility */}
                  <Form.Group id="typeOfPlastic" className="mb-4">
                    <Form.Label>Type of Plastic </Form.Label>
                    <InputGroup>
                      <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item href="#">Facility 1</Dropdown.Item>
                        <Dropdown.Item href="#">Facility 2</Dropdown.Item>
                        <Dropdown.Item href="#">Facility 3</Dropdown.Item>
                      </DropdownButton>
                      <Form.Control aria-label="Text input with dropdown button" />
                    </InputGroup>
                  </Form.Group>
                  {/* Images of waste collected */}
                  <div class="ml-5">
                    <Button class="mx-auto" s>
                      <input
                        type="file"
                        id="weight-collector"
                        name="weight-collector"
                        accept="image/*"
                        capture="environment"
                      ></input>

                    
                    </Button>

                    <Button>
                      <input
                        type="file"x
                        id="weight-collector"
                        name="weight-collector"
                        accept="image/*"
                        capture="environment"
                      ></input>

                   
                    </Button>
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
                  {/* Vehicle No. */}
                  <Form.Group id="vehivle" className="mb-4">
                    <Form.Label>Vehicle no.</Form.Label>
                    <InputGroup>
                      <Form.Control
                        autoFocus
                        required
                        type="weight"
                        placeholder="KAXX 0001"
                      />
                    </InputGroup>
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

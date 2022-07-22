
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faPersonBooth, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const initialFormData = Object.freeze({
  userName: "",
  password: "",
  email: "",
  confPass: "",
  reg_address: "",
  gstin: "",
  timestamp: "",
  site_img: "",
  capacity: "",
  categories: "",
  num_workers: "",
  checkbox: ""
});

export default () => {

  const auth = getAuth();
  
  const [formData, updateFormData] = useState(initialFormData);


  const registerWithEmailAndPassword = async (name, email, password, reg_address, gstin, timestamp, site_img, capacity, categories, num_workers) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password, name, );
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    console.log("handleChange called")
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };
  

  const handleSubmit = () => {
    console.log("handlesubmit called")

    
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    

    console.log(formData.password);
    const passMatch = checkPassMatch(formData.password, formData.confPass)
    const passLength = 
    console.log(formData.email);
    console.log(formData.reg_address);
    console.log(formData.capacity);
    console.log(formData.categories);
    console.log(formData.num_workers);
    // console.log(formData.);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      console.log(user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

    
  };
  

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4">

                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus id="email" name="email" required type="email" placeholder="example@company.com" onChange={handleChange} />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Your Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPersonBooth} />
                      </InputGroup.Text>
                      <Form.Control autoFocus id="username" name="username" required type="username" placeholder="sampleUserName" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="reg_address" className="mb-4">
                    <Form.Label>Registered Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="reg_address" name="reg_address" type="text" placeholder="Enter Facility Address here" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="capacity" className="mb-4">
                    <Form.Label>Capacity</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="capacity" name="capacity" type="text" placeholder="in kgs" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="categories" className="mb-4">
                    <Form.Label>Categories</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="categories" name="" type="text" placeholder="" onChange={handleChange}/>
                      <FormCheck type="checkbox" className="d-flex mb-4">

                        <FormCheck.Input required id="A1" className="me-2" />
                        <FormCheck.Label htmlFor="A1">
                          A1
                        </FormCheck.Label>

                        <FormCheck.Input required id="A2" className="me-2" />
                        <FormCheck.Label htmlFor="A2">
                          A2
                        </FormCheck.Label>
                        
                        <FormCheck.Input required id="A3" className="me-2" />
                        <FormCheck.Label htmlFor="A3">
                          A3
                        </FormCheck.Label>
                        
                        <FormCheck.Input required id="A4" className="me-2" />
                        <FormCheck.Label htmlFor="A4">
                          A4
                        </FormCheck.Label>
                        
                    </FormCheck>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group id="num_workers" className="mb-4">
                    <Form.Label>Number of workers</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="num_workers" name="num_workers" type="text" placeholder="" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>


                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" className="w-100"  onClick={handleSubmit}>
                    Sign up
                  </Button>
                </Form>

                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pil text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

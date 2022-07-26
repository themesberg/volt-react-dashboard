
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faPersonBooth, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase.config';

const initialFormData = Object.freeze({
  username: "",
  password: "",
  email: ""
});

const initialTypeOfWaste = Object.freeze({
  w1Checked: false,
  w2Checked: false,
  w3Checked: false,
  w4Checked: false
})

const initialFacilityState = Object.freeze({
  r1Checked: false,
  r2Checked: false,
  r3Checked: false,
  r4Checked: false,
  r5Checked: false,
  r6Checked: false,
  c1Checked: false,
  e1Checked: false,
  e2Checked: false,
  e3Checked: false,
  e4Checked: false,
})
export default () => {

  const auth = getAuth();
  const [formData, updateFormData] = useState(initialFormData);
  var [typesOfWaste, updateTypesOfWaste] = useState(initialTypeOfWaste);
  var [facilityTypes, updateFacilityTypes] = useState(initialFacilityState);
  var [userRole, setUserRole] = "";

  window.onload = function() {
    var fileInput = document.getElementById('site_images');
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

  const handleChange = (e) => {
    console.log("handleChange called")
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
    // console.log(e.target.name, ": ", e.target.value)
    if(e.target.name === "role") {

    }
  };
  
  const handleChange_facilityType = (e) => {
    console.log("handleChange called")

    updateFacilityTypes({
      ...facilityTypes,

      [e.target.name] : !facilityTypes[e.target.name]
    }); 
  };

  const handleChange_wasteType = (e) => {
    console.log("handleChange called")

    updateTypesOfWaste({
      ...typesOfWaste,

      [e.target.name] : !typesOfWaste[e.target.name]
    }); 
    
    // console.log(typesOfWaste[e.target.name])
  };

  // const getcheckboxStatus = () => {
  //   console.log(typesOfWaste)
  //   console.log(facilityTypes)
  //   console.log(formData)
  // }

  const handleSubmit = async () => {
    console.log("handlesubmit called")

    console.log(formData.password);
    // const passMatch = checkPassMatch(formData.password, formData.confPass)
    // const passLength = 

    const email = String(formData.email)
    const password = String(formData.password)
    const username = String(formData.username)
    const address = String(formData.address)
    const role = String(formData.role)
    const gstin = String(formData.gstin)
    const capacity = String(formData.capacity)
    const employeeCount = String(formData.employeeCount)

    var typesOfWaste_doc = {};
    if(typesOfWaste != {}) {
      typesOfWaste_doc = typesOfWaste;
    }
    // typesOfWaste==={} ? typesOfWaste_doc = {} :typesOfWaste_doc = typesOfWaste;
    // Object.freeze(typesOfWaste_doc)

   
    if(formData.role === "r") {
      var facilityTypes_doc = {};
      facilityTypes_doc = facilityTypes;
    }
    if(formData.role === "m") {
      var primary_business = formData.primary_business
    }

    // facilityTypes==={} ? facilityTypes_doc ={} : facilityTypes_doc = facilityTypes
    // Object.freeze(facilityTypes_doc)

    // console.log(formData.username);
    // console.log(formData.confirmPassword);
    // console.log(typesOfWaste_doc);
    // console.log(typesOfWaste);
    // console.log(facilityTypes_doc)

    //add form validation
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const payload = {
      // uid: user.uid,
      username: username,
      role: role,
      email: email,
      address : address,
      gstin: gstin,
      capacity: capacity,
      employeeCount: employeeCount,
      typesOfWaste: typesOfWaste_doc
    }
    // facilityTypes_doc==={} ? true:payload["facilityTypes"] = facilityTypes_doc

    if(facilityTypes_doc){
      payload["facilityTypes"] = facilityTypes_doc
    }
    if(primary_business){
      payload["primary_business"] = primary_business
    }

    console.log(payload)

    await addDoc(collection(db, "users"), payload);


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

                  {/* <button onClick = {getcheckboxStatus}>click me</button> */}

                  {/* EMAIL */}
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus id="email" name="email" required type="email" placeholder="example@company.com" onChange={handleChange} />
                    </InputGroup>
                  </Form.Group>
                  
                  {/* Username */}
                  <Form.Group id="username" className="mb-4">
                    <Form.Label>Your Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPersonBooth} />
                      </InputGroup.Text>
                      <Form.Control autoFocus id="username" name="username" required type="email" placeholder="sampleUserName" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
                    </InputGroup>
                  </Form.Group>

                  {/* Password Confirm */}
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  {/* Address */}
                  <Form.Group id="address" className="mb-4">
                    <Form.Label>Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="address" name="address" type="text" placeholder="Registered Address of Facility " onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>

                  {/* GSTIN */}
                  <Form.Group id="gstin" className="mb-4">
                    <Form.Label>GSTIN#</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="gstin" name="gstin" type="text" placeholder="Enter 15 digit GSTIN number" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>


                  {/* Site Images */}
                  <Form.Group id="site_images" className="mb-4">
                      <Form.Label>Site Images</Form.Label>
                      <input
                        type="file"
                        id="site_images"
                        name="site_images"
                        accept="image/*"
                        capture="environment"
                        multiple = "multiple"
                      ></input>
                       <div id="fileDisplayArea"></div> 
              


                     
                    </Form.Group>

                  {/* Capacity */}
                  <Form.Group id="Capacity" className="mb-4">
                    <Form.Label>Capacity</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>

                      <Form.Control required id="capacity" name="capacity" type="number" placeholder="Daily waste capacity (kgs)" onChange={handleChange}/>

                      <InputGroup.Text>kgs</InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  {/* Waste Types */}
                                    
                  <Form.Group id = "checkBoxes" className = "mb-4">
                    <Form.Label>Waste Types maintained by facility</Form.Label>
                    <FormCheck id="wasteType1" name="wasteType1" type="checkbox" className="d-flex mb-4" >
                    
                      <FormCheck.Input required id="W1" name = "w1Checked"  className="me-2"  onChange={handleChange_wasteType} />
                      <FormCheck.Label htmlFor="W1">
                        Waste category 1
                      </FormCheck.Label>
                    </FormCheck>  

                    <FormCheck id="wasteType2" name="wasteType2" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="W2" name = "w2Checked"  className="me-2"  onChange={handleChange_wasteType} />
                      <FormCheck.Label htmlFor="W2">
                        Waste category 2
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="wasteType3" name="wasteTypes3" type="checkbox" className="d-flex mb-4">
                      <FormCheck.Input required id="W3" name = "w3Checked"  className="me-2"  onChange={handleChange_wasteType} />
                      <FormCheck.Label htmlFor="W3">
                        Waste category 3
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="wasteType4" name="wasteTypes4" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="W4" name = "w4Checked"  className="me-2"  onChange={handleChange_wasteType} />
                      <FormCheck.Label htmlFor="W4">
                        Waste category 4
                      </FormCheck.Label>
                    </FormCheck>
                  </Form.Group>

                  {/* Role */}
                  <Form.Group id="role" className="mb-4">
                    <Form.Label>Type of Facility</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Select aria-label="Role Selection" name="role" onChange={handleChange}>
                        <option>Open this select menu</option>
                        <option value="c">Collector</option>
                        <option value="r">Plastic Waste Processor</option>
                        <option value="m">Manufacturer (Endpoint)</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  

                  {/* Primary business */}

                  {formData.role === "m" && 
                  <Form.Group id="primary_business" className="mb-4">
                    <Form.Label>Primary Business</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="primary_business" name="primary_business" type="text" placeholder="Enter primary business description of Manufacturer (endpoint)" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>
                  }

                  

                  {/* Facility Types   */}

                  {formData.role === "r" && 
                  <Form.Group id = "facilities" className = "mb-4">
                    <Form.Label>Waste Types maintained by plastic waste processing facility</Form.Label>

                    <FormCheck id="r1" name="r1" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="r1" name = "r1Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r1">
                        R1: Recycling waste category 1 to pellets
                      </FormCheck.Label>
                    </FormCheck>  

                    <FormCheck id="r2" name="r2" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="r2" name = "r2Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r2">
                        R2: Recycling waste category 2 to pellets
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="r3" name="r3" type="checkbox" className="d-flex mb-4">
                      <FormCheck.Input required id="r3" name = "r3Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r3">
                        R3: Recycling waste category 3 to pellets
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="r4" name="r4" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="r4" name = "r4Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r4">
                        R4: Recycling waste category 1 to products
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="r5" name="r5" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="r5" name = "r5Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r5">
                        R5: Recycling waste category 2 to products
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="r6" name="r6" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="r6" name = "r6Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="r6">
                        R6: Recycling waste category 3 to products
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="c1" name="c1" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="c1" name = "c1Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="c1">
                        C1: Processing category 4 for industrial composting
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="e1" name="e1" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="e1" name = "e1Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="e1">
                        E1: End of life plastic waste in cement kilns
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="e2" name="e2" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="e2" name = "e2Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="e2">
                        E2: End of life plastic waste in steel plants
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="e3" name="e3" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="e3" name = "e3Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="e3">
                        E3: Waste to Energy Plants
                      </FormCheck.Label>
                    </FormCheck>

                    <FormCheck id="e4" name="e4" type="checkbox" className="d-flex mb-4" >
                      <FormCheck.Input required id="e4" name = "e4Checked"  className="me-2"  onChange={handleChange_facilityType} />
                      <FormCheck.Label htmlFor="e4">
                        E4: Waste to oil units
                      </FormCheck.Label>
                    </FormCheck>

                  </Form.Group>
                  }

                  

                  {/* Employee Count */}
                  {(formData.role ==="c" ||formData.role ==="r"  ) && 
                  <Form.Group id="employeeCount" className="mb-4">
                    <Form.Label>Employee Count</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required id="employeeCount" name="employeeCount" type="number" placeholder="Employee Count" onChange={handleChange}/>
                    </InputGroup>
                  </Form.Group>
                  }

                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary"  className="w-100"  onClick={handleSubmit}>
                    Sign up
                  </Button>
                </Form>

                
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

import React from "react";
import moment from "moment-timezone";

import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faDownload, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Horse, Heart, Cube, Plus, CurrencyBtc } from "phosphor-react";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import LaravelLogo from "../assets/img/technologies/laravel-logo.svg";
import GitHubButton from 'react-github-btn';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

export default (props) => {
  const currentYear = moment().get("year");
  const showSettings = props.showSettings;

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  }
  const Tab = createBottomTabNavigator();

  return (
    <div>
      {showSettings ? (
        <Card className="theme-settings">
          <Card.Body className="pt-4">
            <Button className="theme-settings-close" variant="close" size="sm" aria-label="Close" onClick={() => { toggleSettings(false) }} />
            <div className="d-flex justify-content-between align-items-center mb-3">
             
            </div>
           
            
            <div className="d-flex justify-content-center">
              <Card.Link >
         <row>  <button>Create a CGP cycle </button>
      <button>Update a CGP cycle</button>
      <button>Upload a GST bill</button>
        
      </row>    
    
        
              </Card.Link>

            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card className="theme-settings theme-settings-expand" onClick={() => { toggleSettings(true) }}>
          <Card.Body className="p-3 py-2">
            <span className="fw-bold h6"><Plus size={28} className="me-1 fs-7" /></span>
          </Card.Body>
        </Card>
      )}
      <footer className="footer section py-5">
        <Row>
          
        
        </Row>
    
      </footer>
      
    </div>
  );
};

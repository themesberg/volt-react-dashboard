import React from "react";

import { Col, Row, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import { Horse, Heart, Cube, Plus, CurrencyBtc } from "phosphor-react";

import {
  CounterWidget,
  CircleChartWidget,
  BarChartWidget,
  TeamMembersWidget,
  ProgressTrackWidget,
  RankingWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  AcquisitionWidget,
} from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

export default () => {
 

  // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
       
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle
            as={Button}
            variant="primary"
            size="sm"
            className="me-2"
          >
            <Plus size={28} />
         
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
            <Plus size={28} />
          Create a New CGP cycle
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              {" "}
          Update CGP cycle
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              Upload GST Bill
            </Dropdown.Item>

            <Dropdown.Divider />

           
          </Dropdown.Menu>
        </Dropdown>

        <ButtonGroup>
          <Button variant="outline-primary" size="sm">
            <plus/>
            Create  a New CGP cycle
          </Button>
          
        </ButtonGroup>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
        
        </Col>
   
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Good Morning, John "
            title=  {date}
           
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Cycle 1"
          
          />
        </Col>

  
      </Row>
<button>
  <Horse size={28} />
</button>
      <Row>
      
      </Row>
    </>
  );
};

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
       
    
        
        
      </div>

      <Row className="justify-content-md-center">
      

  
      </Row>

      <Row>
      
      </Row>
    </>
  );
};

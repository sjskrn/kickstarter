import React, { Component } from 'react';
import {Carousel, Row, Col, PageHeader, Well} from 'react-bootstrap';
import { Button } from 'reactstrap';
import Cookies from 'universal-cookie'

const Dashboard = (props) => (
  // <Row>
  //   <Col xs={12}>
  //     <PageHeader>
  //       HOME HOME HOME Welcome <small>to the dashboard!</small>
  //     </PageHeader>
  //   </Col>
  // <Button color="danger">save !</Button>
  // </Row>
  <div>
{/*  <PageHeader className="pageHeader">
    Welcome to Demo88<br></br>
    <small className="pageHeader">Launch your demo into the future!</small>
  </PageHeader>*/}

  <Well className="wellLrg" bsSize="large">Welcome.</Well>
  <Well className="wellSm" bsSize="small">Launch your demo into the future!</Well>

  <div>
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src={process.env.PUBLIC_URL + "/images/carousel.png"} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </div>
)

export default Dashboard

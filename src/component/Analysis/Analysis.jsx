import React, { Component, Fragment } from "react";
import { Col, Container, Row,} from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip} from "recharts";

export class Analysis extends Component {

  constructor(){
    super();
    this.state ={
      data:[
        {Technology:'PHP', Projects:70},
        {Technology:'SQL', Projects:90},
        {Technology:'Javascript', Projects:85},
        {Technology:'ReactJS', Projects:85},
        {Technology:'Laravel', Projects:60},
        {Technology:'Html', Projects:90},
        {Technology:'CSS', Projects:90},
      ]
    }
  }



  render() {
    return (
      <Fragment>
        <Container className="text-center"> 
        <h1 className="serviceNameTitle">Technology Used</h1>
            <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer>
              <BarChart width={100} height={200} data={this.state.data}>
                
                <XAxis dataKey="Technology"></XAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="Projects" fill="#89CFF0" >

                </Bar>
              </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className='text-justify serviceDescription'>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;

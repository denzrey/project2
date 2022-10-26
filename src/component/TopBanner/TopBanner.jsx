import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../asset/css/custom.css';



export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
            <Container fluid={true} className='topFixedBanner'>
                <div className='topBannerOverlay'>
                <Container className="topContent">
                    <Row>
                        <Col className='text-center'>
                        <h1 className='topTitle'>CFX Learning</h1>
                        <h1 className='topSubTitle'>By Dennis Rentillosa</h1>
                        <button class="btn btn-light" style={{color:'darkblue', padding:'3px'}}>Know More</button>
                        </Col>
                    </Row>
                </Container>




                 </div>
            </Container>


      </Fragment>
    )
  }
}

export default TopBanner
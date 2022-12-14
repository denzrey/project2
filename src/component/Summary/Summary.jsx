import React, { Component, Fragment } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCheckSquare,
  faGlobe,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

library.add(fab, faCheckSquare, faGlobe, faBook, faStar);

export class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner">
          <div className="summaryBannerOverlay">
            <Container>
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <h1 className="countNumber">
                        <FontAwesomeIcon
                          icon="fa-solid fa-globe"
                          size="xs"
                          spin
                        />
                        <CountUp start={0} end={7000} duration={2.75}>
                        {({ countUpRef, start }) => (
                          <span>
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef}></span>
                            </VisibilitySensor>
                          </span>
                        )}
                        </CountUp>
                      </h1>
                      
                      <h4 className="countTitle">Student Worldwide</h4>
                      <hr></hr>
                    </Col>

                    <Col>
                      <h1 className="countNumber">
                        <FontAwesomeIcon icon="fa-solid fa-book" size="xs" />{" "}
                        <CountUp start={0} end={22} duration={2.75}>
                        {({ countUpRef, start }) => (
                          <span>
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef}></span>
                            </VisibilitySensor>
                          </span>
                        )}

                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Course Published</h4>
                      <hr></hr>
                    </Col>

                    <Col>
                      <h1 className="countNumber">
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          size="xs"
                          spin
                        />
                        <CountUp start={0} end={3000} duration={2.75}>

                        {({ countUpRef, start }) => (
                          <span>
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef}></span>
                            </VisibilitySensor>
                          </span>
                        )}
                          </CountUp>

                      </h1>
                      <h4 className="countTitle">Student Reviews</h4>
                      <hr></hr>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <Card id='cardTitle' className="text-center" style={{ marginTop: "140px" }}>
                    <Card.Header></Card.Header>
                    <Card.Body>
                      <Card.Title className="cardTitle">Job Titles</Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon="fa-solid fa-square-check"
                            className="iconBullet"
                          />{" "}
                          System Analyst
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon="fa-solid fa-square-check"
                            className="iconBullet"
                          />{" "}
                          Technical Support
                        </p>
                        <p className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon="fa-solid fa-square-check"
                            className="iconBullet"
                          />{" "}
                          Database Administration
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;

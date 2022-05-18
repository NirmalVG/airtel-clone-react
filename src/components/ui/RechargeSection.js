import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import { Image } from "react-bootstrap";

const RechargeSection = () => {
    return (
        <div className="recharge-section">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <h4 className="recharge-head">Recharge & Pay Bills</h4>
                        <p className="recharge-text">
                            Get exciting cashback and offers
                        </p>
                    </Col>
                    <Col lg={6} md={12} sm={12} xl={6}>
                        <div className="recharge-btn-list">
                            <Button variant="contained" className="prepaid-btn">
                                <Image
                                    src="images/services-sim.svg"
                                    className="btn-img-sec"
                                    fluid
                                ></Image>{" "}
                                <span className="btn-text-sec">
                                    Prepaid
                                </span>
                            </Button>
                            <Button
                                variant="outlined"
                                className="main-change-btn"
                            >
                                <Image
                                    src="images/services-sim.svg"
                                    className="btn-img-sec"
                                    fluid
                                ></Image>
                                <span className="btn-text-sec">
                                    {" "}Postpaid
                                </span>
                            </Button>
                            <Button
                                variant="outlined"
                                className="main-change-btn"
                            >
                                <Image
                                    src="images/services-broadband.svg"
                                    className="btn-img-sec"
                                    fluid
                                ></Image>
                                <span className="btn-text-sec">{" "}DTH</span>
                            </Button>
                            <Button
                                variant="outlined"
                                className="main-change-btn"
                            >
                                <Image
                                    src="images/services-dth.svg"
                                    className="btn-img-sec"
                                    fluid
                                ></Image>
                                <span className="btn-text-sec">
                                    {" "}Broadband
                                </span>
                            </Button>
                            <Button
                                variant="outlined"
                                className="main-change-btn"
                            >
                                <Image
                                    src="images/airtel-black.svg"
                                    className="btn-img-sec"
                                    fluid
                                ></Image>
                                <span className="btn-text-sec">
                                    {" "}Airtel Black
                                </span>
                            </Button>
                        </div>                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RechargeSection;

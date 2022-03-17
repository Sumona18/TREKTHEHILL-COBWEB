import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo1 from "./images/logo1.jpg";
import logo2 from "./images/logo2.jpg";
import logo3 from "./images/logo3.jpg";

export default function Course() {
    return (
        <div className="course">
            <center>
                <h1>    We are here for you</h1>
                <p className="p1">The Nerve Guru is designed especially for the budding youth to provide an environment where they can tackle their mental problems and freely discuss with our Nerve Guru to recieve a proper counselling and guidance.</p>
                <Container>
                    <Row>
                        <Col>
                            <img className="logo1" src={logo1} alt="error" />
                            <div className="text">
                                <h4>Understanding their Mental State</h4><br />
                                <p>Being mentally and emotionally healthy does not mean children never experience disappointment or challenges. Problems come up in life and can cause stress, sadness, and anxiety. There are times when it may be best to consult with a mental health professional.</p>
                            </div>
                        </Col>
                        <Col>

                            <img className="logo2" src={logo2} alt="error" />
                            <div className="text">
                                <h4>Why Mental health is a growing concern</h4><br />
                                <p>Mental health problems affect around one in six children. Alarmingly, however, 75% of children and young people who experience a mental health problem aren’t getting the help they need.
                                    Children’s emotional wellbeing is just as important as their physical health.</p>
                            </div>
                        </Col>


                        <Col><img className="logo3" src={logo3} alt="error" />
                            <div className="text">
                                <h4>The Nerve Guru welcomes you all!</h4><br />
                                <p>The most important part where we are still lagging is a well interacted platform between the kids and the counsellor and this is exactly what we aim to provide here. A friendly chat where they can freey express their emotions is the main purpose we sought.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </center>
        </div>
    );

}

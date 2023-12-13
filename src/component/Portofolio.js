import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import portof1 from "../assets/img/KOLIS.jpg"
import portof2 from "../assets/img/ZEN.jpg"
import portof3 from "../assets/img/MAULA.jpg"
import portof4 from "../assets/img/WISNU.jpg"

export const Portofolio = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max : 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="portofolio">
            <Container>
                <Row>
                    <Col size={12}>
                        <div  className="skill-bx wow zoomIn">
                            <h2>Our Portofolio</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img height={200} width={200} src={portof1} alt="portof1" />
                                    <h4>KOLIS</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={200} src={portof2} alt="portof2" />
                                    <h4>ZAENURI</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={200} src={portof3} alt="portof3" />
                                    <h4>MAULA KN</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={200} src={portof4} alt="portof4" />
                                    <h4>WISNU</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Portofolio;
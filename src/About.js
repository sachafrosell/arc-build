import React from 'react'

import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText
} from "reactstrap";

import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"
import ContentNewCard from "./ContentNewCard.js"
import DarkFooter from "./components/Footers/DarkFooter.js";
import store from './Store.js'

import TukTukImg from './assets/img/city-lines.png'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

function About() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>

      <div className="wrapper" style={{backgroundColor: "black"}}>

        <div className="section section-about-us" style={{paddingTop: "60px", paddingBottom: "130px"}}>
          <Container>
            <Row>
              <Col className="text-left" md="6">
                <div style={{paddingTop: "17px"}}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      OUR STORY

                    </span>
                  </h1>
                  <p style={{
                    border: "0.5px solid black",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                    maxWidth: "50px"
                  }}></p>
                <h5 className="description" style={{fontSize: "17px", color: "#6d747c", fontWeight: "500px"}}>

                  ARC Build specialises in the delivery of sustainable and cost-effective approaches to building high quality roads and affordable housing in rapidly growing cities and countries across Africa. ARC Build places an emphasis on using sustainable building techniques and using locally sourced materials and labour. We build the resilient infrastructure of the future at affordable rates for governments and developers. The foundations of our projects are green at heart and help to reduce global greenhouse gas emissions when compared to alternatives.

                  </h5>
                </div>

              </Col>
              <Col>
                <img
                  src={TukTukImg}
                  style={{
                    paddingTop: "35px"
                  }}
                >

                </img>
              </Col>



            </Row>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default About;

import React from 'react';
import { Link } from 'react-router-dom'

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

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'
import City3 from './assets/img/city3.jpg'

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

const ButtonStyle = {
  background: "none",
  color: "black",
  outlineColor: "black",
  border:"solid 0.7px black",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "2px",
  fontSize: "12px"
}

const liStyle = {
  padding: "1px",
  marginLeft: "-40px"
}


class Big extends React.Component {
  render() {
    return (
      <>

        <div className="wrapper" style={{backgroundColor: "black"}}>

          <div className="section section-about-us" style={{paddingTop:"0px", paddingBottom: "0px"}}>

            <Row>
              <Col md="6">
                <img
                  src={City3}
                  style={{objectFit: "fill"}}>
                </img>
              </Col>

              <Col className="text-left" md="6">
                <div style={{paddingTop: "10%", paddingRight: "30%", paddingLeft: "1%"}}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      OUR APPROACH

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

                    ARC ride encompasses Four Operational Pillars,
                    which are replicable and scalable across all operational countries and cities.
                    Assembly plants for E3 vehicles, establishment of solar charging networks,
                    ownership and management of E3-fleets and a centralised ride and delivery app make up these Four Pillars.




                  </h5>
                  <Link to='/arc-roads'>
                    <Button style={ButtonStyle}>
                      MORE INFO
                    </Button>
                  </Link>

                </div>

              </Col>





            </Row>
            <div className="separator separator-primary"></div>

          </div>
        </div>
      </>
    )
  }
}

export default Big

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

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'
import City4 from './assets/img/city4.jpg'
import Challenge from './Challenge.js'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "black"
}

const divStyle1 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "375px",
  height: "100%"
}

const divStyle2 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black",
  minHeight: "300px",
    height: "100%"
}

const colStyle = {
  paddingTop: "5px"

}

class Pillars2 extends React.Component {
constructor(props){
  super(props);
  this.state = {
    1: false,
    2: false,
    3: false,
    4: false
  }
}

  top() {
    window.scrollTo(0, 0);
  }

  handleHover = (e) => {
    console.log(e.target)
  }

  render() {
    return (
      <>
        {this.top()}
        <div className="wrapper"  >



          <div className="section section-about-us" style={{paddingTop: "50px", paddingBottom: "100px", backgroundImage: "url(" + require("./assets/img/lake-burera.jpg") + ")"}}>
            <Container >
              <Row>
                <Col md="12" style={{textAlign: "center"}}>
                  <h1 style={{fontSize: "40px", fontWeight: "900", marginBottom: "10px"}}>SERVICES</h1>
                  <hr style={{border: "0.5px solid black",

                    marginBottom: "30px",
                    display: "block",
                  maxWidth: "200px"}}></hr>
                </Col>
              </Row>
              <Row style={{display: "tableCell"}}>
                <Col className="text-center" style={colStyle} md="4" id="assembly" onMouseEnter={this.handleHover} >
                  <div class="1" style={divStyle1} >
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        APS SOIL STABILISATION

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px", opacity: "60%"}}>


                      This service covers a range of options including, but not limited to, Rural Roads, Feeder Roads, Car Parks, Driveways, Estates and Solar Sites. This solution is ideal for smaller projects and can be completed very quickly.
                    </h5>



                  </div>

                </Col>

                <Col className="text-center" md="4" style={colStyle}>
                  <div style={divStyle1}>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        APS/CAP COLD ASPHALT MIX

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      This covers a range of options including,
                      but not limited to Main Roads, Dual Carriageways,
                      Motorways, Military Compounds, Air Strips and Airports,
                      Mining, Construction, Runways and Helipads.
                      This is the strongest service we offer and combines
                      a base layer of APS reinforced with a cold asphalt covering.
                      This ensures the roads can withstand an excess of 100 Tonne vehicle weight and last over 10 years.
     </h5>

                  </div>

                </Col>


                <Col className="text-center" style={colStyle} md="4">
                  <div style={divStyle2}>
                    <h1 style={titleStyle} className="title">
                      <br />
                      <span style={{fontWeight: "900px"}}>
                        ASPHALT

                      </span>
                    </h1>
                    <hr style={{border: "0.5px solid black",
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "15px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      This service allows for a range of road based repairs,
                      which include, but not limited to: Road Patching, Potholes,
                      Cracked Roads. This solution is versatile and easy to use,
                      quickly improving existing road infrastructure for a low cost.


                    </h5>




                  </div>

                </Col>



              </Row>

              <div className="separator separator-primary"></div>
            </Container>
          </div>
        </div>
      </>
    );
  }

}

export default Pillars2;

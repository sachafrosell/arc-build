import React from 'react'
import {Link} from "react-router-dom"
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

import Kigali from './assets/img/kigali-city-4.jpg'



const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"

}

const ButtonStyle = {
  background: "none",
  color: "white",
  outlineColor: "white",
  border:"solid 0.7px white",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "10px",
  fontSize: "12px"
}

function Competition() {


  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            background:  "url(" + require("./assets/img/captureting.jpg") + ")",

          }}

        ></div>
        <Container>

          <div style={{textAlign: "left", marginTop: "-20px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                OUR APPROACH


              </span>
            </h1>
            <p style={{
              border: "0.5px solid white",
              marginTop: "15px",
              marginBottom: "15px",
              display: "block",
              maxWidth: "50px"
            }}></p>
            <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

              ARC Build aims to be an exemplar for emerging construction corporations looking to include themselves
              in an African New Green Deal whilst helping to build the infrastructure necessary to support societies
              going through rapid transformation. We achieve this by building future-proof
              infrastructure that enables effective transportation and building affordable
              homes that will stand the test of time. This is reinforced by the decades of
            practical experiences of the team in Rwanda, Nigeria and internationally.
                </h5>
              </div>
              <Link to='/arc-roads'>
              <Button style={ButtonStyle}>
                ARC ROAD
              </Button>
            </Link>
            <Link to='/arc-housing'>
              <Button style={ButtonStyle}>
                ARC HOUSING
              </Button>
            </Link>


          <div className="separator separator-primary"></div>
        </Container>
      </div>

    </>
  );
}

export default Competition;

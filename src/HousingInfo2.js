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
  marginTop: "2px",
  fontSize: "12px"
}

function Competition() {


  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            background: "#d2d2d2 !important",
          }}

        ></div>
        <Container style={{paddingBottom: "100px"}}>

          <div style={{textAlign: "left", marginTop: "-20px", paddingBottom: "25px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                THE HOUSING OPPORTUNITY


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

              ARC Build is developing a scalable model for cost-effective,
              carbon-sensitive homes that will positively influence future generations
              and be an example for low cost housing in developing nations.
              This will be to help manage the huge growing demand for affordable housing experienced in rapidly growing African cities, such as Kigali.
            </h5>
          </div>
          <p style={{
            border: "0.5px dotted white",
            marginTop: "5px",
            marginBottom: "25px",
            display: "block",
            maxWidth: "100%"
          }}></p>
          <div style={{textAlign: "left", marginTop: "-20px"}}>
            <h1 style={titleStyle} className="title">
              <span style={{fontWeight: "900px"}}>
                OUR METHOD


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

              ARC Build has a partnership with a leading international architects to analyse,
              design and build a new form of affordable modular housing.
              The focus is on developing an approach that leads to a cost-effective,
              environmentally sustainable, locally-beneficial and attractive solution that can be deployed at scale.

            </h5>
            <h5 className="description" style={{fontSize: "17px", color: "#FFF", fontWeight: "500px"}}>

              By using local supply chains, supporting our efforts to create local jobs whilst creating efficient and sustainable homes. We will also use sustainable materials such as timber over environmentally-damaging construction materials such as concrete or steel where possible to ensure a minimal carbon footprint for our company and Rwanda as a country. This project will create a model for future sustainable growth.

            </h5>
          </div>




        </Container>
      </div>

    </>
  );
}

export default Competition;

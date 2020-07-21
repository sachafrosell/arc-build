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
  paddingTop: "5px",

}

class Pillars extends React.Component {
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
        <Challenge />
      </>
    );
  }

}

export default Pillars;

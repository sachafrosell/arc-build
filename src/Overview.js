import React from 'react'
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
import Big from './OverviewBig.js'
import Small from './OverviewSmall.js'

import TukTukImg from './assets/img/800px_COLOURBOX25316311.jpg'
import TukTukImg2 from './assets/img/tuk-tuk22.jpg'
import City3 from './assets/img/city3.jpg'


const titleStyle = {
   fontWeight: "900px",
   fontSize: "20px",
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
  fontSize: "7px"
}

const liStyle = {
  padding: "1px",
  marginLeft: "-40px"
}
function Overview() {
  store.dispatch({
    type: "COLOR",
    payload: "BLACK"
  })

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener("resize", handleResize);
    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  })



  return (
    <>
    {dimensions.width > 1025 ? <Big /> : <Small />}

    </>
  );
}

export default Overview;

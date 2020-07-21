import React from "react";



// reactstrap ./components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core ./components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import TeamBig from './TeamBig.js'
import TeamSmall from './TeamSmall.js'

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

function Team() {

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

      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          id="scrolla"
          style={{
            background: "#d2d2d2 !important"
          }}

        ></div>
        <Container style={{textAlign: "left"}}>
          <h1 style={titleStyle} className="title">
            <span style={{fontWeight: "900px"}}>
              OUR TEAM

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

            The ARC management team has an extensive track record in construction and has a plethora of experience in building new businesses in Africa. We have created a team of global experts in their respective fields, alongside experienced local actors in the industry.  Our mission is to deliver high quality infrastructure across all the projects we work on. Placing an emphasis on creating sustainable solutions to meet our clients needs.

          </h5>

        </Container>
      </div>





    </>
  );
}

export default Team;

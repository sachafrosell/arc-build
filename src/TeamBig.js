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

const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px"
}

function Team() {







  return (
    <>
      <Container>


        <div className="team" style={{paddingTop: "100px", paddingBottom: "50px", background: "white", textAlign: "center"}}>

          <Row>
            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/bede.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Bede Hesmondhalgh</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>HEAD OF BUSINESS DEVELOPMENT</p>

              </div>
            </Col>
            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/John.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>John Nkongoli</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>ADVISOR</p>

              </div>
            </Col>

            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/Felix.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Felix Saro-Wiwa</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>VICE PRESIDENT OF OPERATIONS</p>

              </div>
            </Col>
            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/Eric.png")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Eric Hafashimana</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>OPERATIONS</p>

              </div>
            </Col>
          </Row>
          <Row>
            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/jo-hurst-croft.jpg")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Jo Hurst-Croft</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>FOUNDER / CEO</p>

              </div>
            </Col>
            <Col md="3" style={{width:"25%"}}>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-square img-fluid img-raised"
                  src={require("./assets/img/joanna-cheong.jpg")}
                ></img>
                <h6 className="title" style={{fontSize: "15px"}}>Joanna Cheong</h6>
                <p style={{fontSize: "13px", color:"#9A9A9A"}}>CFO</p>

              </div>
            </Col>
            

          </Row>
        </div>
      </Container>

    </>
  );
}

export default Team;

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


const titleStyle = {
   fontWeight: "900px",
   fontSize: "30px",
   marginBottom: "5px",
   color: "black"

}

const divStyle = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",
  border: "0.5px solid black"
}
const divStyle3 = {
  paddingLeft: "17px",
  paddingRight: "17px",
  paddingTop: "0px",
  paddingBottom: "15px",

}
const divStyle2 = {
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "15px",

  minHeight: "270px"
}

function Challenge() {
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

      <div className="wrapper" style={{background: "white"}}>

        <div className="section section-about-us" style={{ paddingTop: "80px", paddingBottom: "60px", background: "white"}}>
          <Container>
            <Row style={{justifyContent: "center"}}>
              <Col className="text-center" md="12" style={{padding: "0px"}}>
                <div style={divStyle}>
                  <h1 style={titleStyle} className="title">
                    <span style={{fontWeight: "900px"}}>
                      THE CHALLENGE

                    </span>
                  </h1>
                  <hr style={{border: "0.5px solid white",
                    marginTop: "15px",
                    marginBottom: "15px",
                    display: "block",
                  maxWidth: "50px"}}></hr>
                <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                     Existing transport shortcomings increase both congestion and pollution in cities and negatively affect connectivity in rural areas.
                    This lack of key infrastructure has knock on effects on
                    the costs of goods and services.
                    It is globally recognised that roads are central to economic development, however in the countries in which we operate, only a small percentage of roads are paved. For example, in Rwanda only 19% of roads are paved. This amounts to a 15,000km unpaved road network in Rwanda alone.


                  </h5>
                  <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                  ARC Build delivers sustainable infrastructure which improves access to vital services such as Health, Education, Industry, Farming, Tourism and Transport, saving time, money and energy. We work in partnerships with local and national governments to address these challenges through our market leading sustainable approach to road building.


                  </h5>
                </div>

              </Col>



            </Row>
            <Row style={{paddingTop: "35px", justifyContent: "center", border: "0.5px solid black", marginTop: "20px"}}>
              <Col className="text-center" md="12" >

                <div style={divStyle3} >
                  <div>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px"}}>
                        THE SOLUTION

                      </span>
                    </h1>
                    <hr style={{border: "0.7px solid black",
                        marginTop: "15px",
                        marginBottom: "15px",
                        display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      ARC Builds exclusive partnerships allowing us to deliver a unique globally leading solution to road building.
                      We can build feeder, secondary and tertiary roads and provide our clients an average saving of
                      25% whilst creating local jobs and being much better for the environment.
                      Our roads are high quality and will stand the test of time.
                    </h5>
                  </div>
                </div>


              </Col>
              <Col className="text-center" md="4">

                <div style={divStyle2} >
                  <div>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px", fontSize: "25px"}}>
                        STRONG ROADS:

                      </span>
                    </h1>
                    <hr style={{border: "0.7px solid black",
                        marginTop: "15px",
                        marginBottom: "15px",
                        display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      Our roads have unconfined compressive strength approaching low-grade concrete of 1750 pso (123.07 kg/p/cm2).
                    </h5>
                  </div>
                </div>


              </Col>
              <Col className="text-center" md="4" >

                <div style={divStyle2} >
                  <div>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px", fontSize: "25px"}}>
                        ECO FRIENDLY:

                      </span>
                    </h1>
                    <hr style={{border: "0.7px solid black",
                        marginTop: "15px",
                        marginBottom: "15px",
                        display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      Our product will not leach into the soil or pollution the surroundings. We use the local soil thus significantly reducing the carbon footprint of the input costs and the road as a whole.
                    </h5>
                  </div>
                </div>


              </Col>
              <Col className="text-center" md="4" >

                <div style={divStyle2} >
                  <div>
                    <h1 style={titleStyle} className="title">
                      <span style={{fontWeight: "900px", fontSize: "25px"}}>
                        QUALITY PRODUCT:

                      </span>
                    </h1>
                    <hr style={{border: "0.7px solid black",
                        marginTop: "15px",
                        marginBottom: "15px",
                        display: "block",
                    maxWidth: "50px"}}></hr>
                  <h5 className="description" style={{fontSize: "17px", color: "black", fontWeight: "500px", opacity: "60%"}}>

                      We build feeder and secondary roads to the same quality as asphalt or concrete roads. Our approach ensures that maintenance is minimal, quick and comparatively cheap.
                    </h5>
                  </div>
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

export default Challenge;

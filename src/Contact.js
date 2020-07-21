import React, { useState } from "react";

// components
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"
import ContentNewCard from "./ContentNewCard.js"
import store from './Store.js'
import TukTukImg2 from './assets/img/tuk-tuk2.jpg'
import Team from './Team.js'






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
  UncontrolledAlert,
  Alert,
  Form,
  FormGroup
} from "reactstrap";

// core ./components
import ExamplesNavbar2 from "./components/Navbars/ExamplesNavbar2.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import InfoFooter from "./components/Footers/InfoFooter.js"
import ContactHeader from "./ContactHeader.js"

const titleStyle = {
   fontWeight: "900px",
   fontSize: "20px",
   textDecoration: "underline"
}

const inputStyle = {
  fontSize: "15px"
}



function Contact () {

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



const buttonControl = () => {
    store.dispatch({
      type: "SUCCESS",
      payload: true
    })
  }

 const sendEmail = (e) => {
    console.log(e)

  }






      return (
        <>

          <ExamplesNavbar2 />
          <ContactHeader />

          <Container>

            <div className="wrapper" style={{backgroundColor: "black"}}>

              <div className="section section-contact-us" style={{paddingTop:"20px", paddingBottom: "50px"}}>




                <Container style={{paddingTop: "40px"}}>
                  <div >
                    <Row>
                      <Col className="text-center ml-auto mr-auto" lg="8" md="12" style={inputStyle}>
                        <Form>
                          <InputGroup
                            className="name"

                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{borderRadius: "0px"}}>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="First Name..."
                              type="text"


                              style={{borderRadius: "0px"}}
                            ></Input>
                          </InputGroup>
                          <InputGroup
                            className="email"
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{borderRadius: "0px"}}>
                                <i className="now-ui-icons ui-1_email-85"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email..."
                              type="text"

                              style={{borderRadius: "0px"}}
                            ></Input>
                          </InputGroup>
                          <div className="textarea-container">
                            <Input
                              cols="80"
                              name="name"
                              placeholder="Type a message..."

                              rows="4"
                              type="textarea"
                            ></Input>
                          </div>
                          <div>

                          </div>
                        </Form>
                        <Button

                          style={{borderRadius: "0px", background: "none", color: "#495057", border: "black"}}
                          size="lg"

                        >
                          Send Message
                        </Button>




                      </Col>
                    </Row>
                  </div>

                </Container>





              </div>
            </div>
            <Alert color="success" isOpen={store.getState()}>
              Message Recieved
            </Alert>

          </Container>

           <Team />
          <InfoFooter />
          <DarkFooter />


        </>
      );



}

export default Contact;

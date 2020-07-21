import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components



const ButtonStyle = {
  background: "none",
  outlineColor: "#FFFFFF",
  border:"solid 0.7px white",
  borderRadius: "0px",
  float: "left",
  marginRight: "5px",
  marginLeft: "3px",
  marginTop: "-15px",
  fontSize: "7px"
}

function PillarPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {

    if (window.innerWidth > 500) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (pageHeader.current) {
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }

      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

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
          style={{
            backgroundImage: "url(" + require("../../assets/img/roadtingaling.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-left">
          <Container style={{padding: "0px", paddingTop: "150px"}}>
            {dimensions.width >= 507 ? <h1 className="title" style={{textAlign: "left", fontSize: "60px", letterSpacing: "5px", fontWeight: "300"}}>
              <span >
                ARC ROAD:
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                CONNECTING PEOPLE AND PLACES
              </span>
            </h1> : <h1 className="title" style={{textAlign: "left", fontSize: "30px", letterSpacing: "5px", fontWeight: "300"}}>
              <span >
                ARC ROAD:
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                CONNECTING
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                PEOPLE
              </span>
              <br />
              <span style={{fontWeight: "900"}}>
                AND PLACES
              </span>
            </h1>}

            <Row>
              <Col md="4">

              </Col>
              <Col md="8">
                <div>
                  <blockquote className="blockquote text-right" style={{color: "#1aff1a", border: "none"}}>
                    <p className="mb-0" style={{fontSize: "14px", fontStyle: "italic", color: "#00D4FF", fontWeight: 400}}>
                      “Many African economies have experienced significant growth in recent years. This growth could have been even greater if the countries concerned had had appropriate transport infrastructure in place.”
                    </p>
                    <cite title="Source Title" style={{fontSize: "13px", opacity: "60%", fontStyle: "italic" }}> - Ashurst International Law Firm</cite>

                  </blockquote>
                </div>

                </Col>
              </Row>




          </Container>

        </div>
      </div>
    </>
  );
}

export default PillarPageHeader;

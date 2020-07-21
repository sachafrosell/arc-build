import React from "react";
import { Link } from "react-router-dom";
import LogoDark from "../../assets/img/logo_BUILD_DARK.png";

// reactstrap components
import {
  Button,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

var Logo = LogoDark
var ButtonColor = "black"
var navbarColor = "navbar-white"



function ExamplesNavbar(props) {

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

      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" style={{height: 120}}>

        <Container>
          <div className="navbar-translate" style={{position: "absolute", top: "8px"}}>

            <NavbarBrand style={{padding: "0px"}}>
              <img
                src={Logo}
                style={{
                    width: "110px",
                    position: "10px"
                }}
              >
              </img>
            </NavbarBrand>
            {dimensions.width >= 1200 ? <Nav style={{float: "right", marginRight: "-950px"}}>
              <NavItem>
                <Link to="/home" >
                  <Button
                    style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-roads">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > ROAD </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-housing">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > HOUSING </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>



            </Nav>
            : dimensions.width >= 992 && dimensions.width < 1200 ? <Nav style={{float: "right", marginRight: "-800px"}}>
              <NavItem>
                <Link to="/home" >
                  <Button
                    style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-roads">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > ROAD </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-housing">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > HOUSING </Button>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/contact">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>



            </Nav> : dimensions.width >= 768 && dimensions.width < 992 ? <Nav style={{float: "right", marginRight: "-350px"}}>
              <NavItem>
                <Link to="/home" >
                  <Button
                    style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                    }} onClick={props.forceUpdate} > HOME </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-roads">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > ROAD </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/arc-housing">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > HOUSING </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
                  <Button style={{
                      background: "none",
                      color: ButtonColor,
                      position: "relative",
                      float: "right",
                      fontSize: "15px",
                      borderRadius: "0px",
                      padding: "15px",
                      marginTop: "20px"
                  }} > GET IN TOUCH </Button>
                </Link>
              </NavItem>



            </Nav> :  ""}

            <div class="topnav-right" style={{paddingRight: "150px", marginTop: "-10px"}}>







            </div>
          </div>

        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;

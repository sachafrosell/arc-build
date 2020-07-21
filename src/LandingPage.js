import React, { useState } from 'react';
import ContentCard from "./ContentCard.js"
import Popup from "./Popup.js"
import ContentNewCard from "./ContentNewCard.js"
import store from './Store.js'
import About from './About.js'
import Competition from './Competition.js'
import Challenge from './Challenge.js'
import Solution from './Solution.js'
import Overview from './Overview.js'
import Team from './Team.js'
import InfoFooter from "./components/Footers/InfoFooter.js"
import LandingPageHeaderMobile from './components/Headers/LandingPageHeader.js'


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
import ArcNavBar from "./components/Navbars/ArcNavbar.js"

import DarkFooter from "./components/Footers/DarkFooter.js";



const top = () => {
  window.scrollTo(0, 0);
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function LandingPage() {

  const forceUpdate = useForceUpdate();

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

    {top}

      <ExamplesNavbar forceUpdate={top()}/>
      <div className="wrapper">
        <LandingPageHeader/>

      </div>
      <About />
      <Competition />
      

      <InfoFooter />
      <DarkFooter />
    </>
  );
}

export default LandingPage;

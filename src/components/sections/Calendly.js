import React, { Component} from "react";
import styled, { css } from 'styled-components';

class Calendly extends Component {
  render(){
    return (
      <div>
      <div id="schedule_form">
        <div className="calendly-inline-widget" data-url="https://calendly.com/handofgravity" 
        style={{ width:'320px', height:'580px',}}></div>
      </div>
    </div>
    );
  }
};

const CalendlyForm = styled.div`
min-width:320px;
height:580px;
  `;


export default Calendly;
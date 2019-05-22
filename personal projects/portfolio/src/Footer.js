import React from 'react';
import './portfolio.css';
function Footer(props){

  const f = {
    marginLeft: '85vw',
    color: props.textcolor,
  }

  return (
      <div>
        <span style={f}> © 2019 Aspen Young, All Rights Reserved</span>
      </div>
  );
}
export default Footer;

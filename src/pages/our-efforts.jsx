import React from 'react';

import '../assets/css/efforts.css';

import qrCode from '../assets/imgs/qr-code upcoming.png';

class Efforts extends React.Component {
    render() {
      return (
        <div className="bkg">
          <h1 style={{textAlign: 'center'}}><b>Sponsors?</b></h1>
          <br />
          <h2 style={{textAlign: 'center'}}><b><i>UNWASCT</i></b></h2>
          <img src={qrCode} alt="" style={{marginLeft: 'auto', marginRight: 'auto', width: '50%', display: 'block'}}></img>
        </div>
      );
    }
}

export default Efforts;
import React from 'react';
import archlogo from '../assets/imgs/archlogo.png';

class Powered extends React.Component {
    render() {
      return (
        <div className="bkg">
            <h1 style={{textAlign: 'center'}}>Made on:</h1>
            <img src={archlogo} alt=""></img>
        </div>
      );
    }
}

export default Powered;
import React from 'react';

import '../assets/css/goals.css';

class Goals extends React.Component {
    render() {
      return (
        <div className="bkg">
          <h2 style={{textAlign: 'center'}} className="whatIs">What are the developmental goals?</h2>
          <br /> <br />
          <dl style={{textAlign: 'center'}}>
            <dd><i>no poverty</i></dd>
              <br></br>
            <dd><i>no hunger</i></dd>
              <br></br>
            <dd><i>to eliminate global warming</i></dd>
              <br></br>
            <dd><i>reduce all food waste</i></dd>
              <br></br>
              <br></br>
            <div style={{width: '75%', display: 'flex', justifyContent: 'center', marginLeft: '13%'}}>
              <p>Our goal is to reduce all food waste, eliminate or lessen global warming/climate change as well as eliminate poverty and hunger. We wish to allow children and families to live safely and calmly without having to worry about if they will get enough food or if they have enough money for whatever and shelter</p>
            </div>
          </dl>
        </div>
      );
    }
}

export default Goals;
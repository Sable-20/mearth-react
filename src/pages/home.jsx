import React from "react";
import '../assets/css/home.css';
import '../assets/css/global.css';

class Home extends React.Component {
    render() {
      return (
        <div className="bkg">
          <h1 className="whoAre">Who are we?</h1>
          <ul className="lists" id="whoList">
            <li><h2><b><i>UNASWCT</i></b></h2></li>
            <li>A Conservation Group</li>
            <li>A Future Focused Group</li>
            <li>A Group to Help Earth</li>
            <br></br>
            <br></br>
            <br></br>
            <div style={{width: '75%', display: 'flex', justifyContent: 'center', marginLeft: '13%'}}>
              <p>we are here to try and help not only the earth but the people of the earth. We need to educate everyone on how we can protect the earth so that we can make everyones lives better</p>
            </div>
          </ul>
        </div>
      );
    }
}

export default Home;
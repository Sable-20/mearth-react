// react
import React from "react";


// logo/css
// import logo from './logo.svg';
import './App.css';
import './assets/css/global.css';

// pages
import Navbar from './partials/nav.jsx';
// import Footer from './partials/footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

// exporting app so it can be exposed in index.js
export default App;
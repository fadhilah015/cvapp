import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Navigation from './navigation';
import About from './about-us';
import Uploade from './uploade';
import Foter from './foter';
import Information from './information'
import * as serviceWorker from './serviceWorker';





class App extends React.Component {
  render() {

    return (

      <div>
        <Navigation LogoTitle="السيرة الذاتية" />
      <Information />
      <Uploade />
      <About />

      <Foter />

      </div>


  );


}
}


ReactDOM.render(<App />, document.getElementById('root'));
/*<About />*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

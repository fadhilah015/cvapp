import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
  render() {

    return (

      <nav className="logo">

          <h1 >{this.props.LogoTitle}</h1>
          <ul>
            <li><a >ملئ المعلومات  </a></li>
            <li><a >رفع الملفات </a></li>
            <li><a >عنا </a></li>

          </ul>

      </nav>


  );


}
}

export default Navigation;

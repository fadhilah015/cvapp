import React from 'react';
import './about-us.css';

class About extends React.Component {
  render() {

    return (

      <div className="about">
      <p>

        <h3> صممنا هذا الموقع لتحدي انفسنا أولا و لإكتساب مهارة جديدة  و تعلم تقنية جديدة, البدايات دائما بسيطة و هذا الموقع هو بدايتنا نحو طموح يلامس السحاب
          </h3>

          <ul className="p">
            <li className="l">قائد الفريق : فضيله الفاضل </li>
            <li className="l">العضو الاول : منال الراشد</li>
            <li className="l">العضو الثاني : نوره الهندي</li>

          </ul>
      </p>

      </div>


  );


}
}

export default About;
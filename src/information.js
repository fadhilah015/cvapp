import React from 'react';
import './information.css'

class Information extends React.Component {
  handlechange = (e) => {
    console.log(e.target.value);

  }

 render () {
   return (
     <div>
     <div className="form">
   <h3> الرجاء تعبئة البيانات التالية </h3>
   <form onSubmit ={this.handleSubmit} noValidate>
   <div className="FiristName">
   <label htmlFor="FiristName">الاسم الاول</label>
   <input
    type="text"
     className=""
      placeholder="First Name"
        name="firest Name"
         noValidate
         onChange={this.handlechange}
         />
     <br />

    </div>
    <div className="lastName">
   <label htmlFor="LaststName">الاسم الاخير </label>
   <input
    type="text"
     className=""
      placeholder="Last Name"
        name="lastName"
         noValidate
         onChange={this.handlechange}
         />
     <br />

    </div>
    <div className="university">
   <label htmlFor="university">الجامعة</label>
   <input
    type="text"
     className=""
      placeholder="University"
        name="university"
         noValidate
         onChange={this.handlechange}
         />
     <br />

    </div>
    <div className="major">
   <label htmlFor="university">التخصص </label>
   <input
    type="text"
     className=""
      placeholder="Major"
        name="major"
         noValidate
         onchange={this.handlechange}
         />
     <br />

    </div>
     <br />
     <br />

    <div >
    <button className="click " type="submit">عرض </button>
</div>


   </form>
   </div>
   </div>
 );
}
}
export default Information;



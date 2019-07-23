import React from 'react';

import './uploade.css';
//import Navigation from './navigation';

class Uploade extends React.Component {
 state ={
      file: null
    }

   handleFile(e){

         let file=e.target.files[0]
         this.setState({file: file})
      }
  hendelUpload(e){
    console.log(this.state , "the state...........");
  }

  render() {

    return (

      <div className="Uploade">
      <h1>أرفع سيرتك الذاتية </h1>
      <img src="upload.png" width="100" />
      <div>

      <form>
      <div >
   <h4> :الرجاء اختيار الملف </h4>
   <input  type="file" name="file" onChange={(e)=>this.handleFile(e)}/>
    </div>
    <br />
      <div >
        <button  className="button" type="button" onClick={(e)=>this.hendelUpload(e)}>رفع</button>
       </div>

       </form>
         </div>
      </div>


  );


}
}

export default Uploade;

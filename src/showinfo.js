import React from 'react';
import './information.css'

class showInfo extends React.Component {
constructor(){
    super(props);
    this.state={
      items:[],
      isLoaded: false,

    }

  }
coponentDidMount(){
  fetch('/routes/api/items')
  .then(res => res.json())
  .then(json =>{
    this.setState({ isLoaded:true, items:json,})
    });

}
render () {
  var{isLoaded , items}= this.state;
  if(!isLoaded){
    return<div>Loading .....</div>;

  }
  else{
   return (
       <div>
          <ul>
           {items.map(item =>(
              <li key={item.id}>
              fristname: {items.name}| lastname{items.lname}|university:{items.university}|major:{items.major}
             </li>
           ))};
          </ul>

       </div>
 );
}
}
}
export default showInfo;

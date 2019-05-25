import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      trails: []
 
    } 
  this.mtbTrails=this.mtbTrails.bind(this);
  
}

  mtbTrails(){
    axios
    .get(`https://www.mtbproject.com/data/get-trails-by-id?ids=4670265,157369,7015764,7003838,3671983&key=200474484-354d53d831d9c908d3bc05ffe69094c4`)
    .then(res => console.log(res.data))
    this.setState({ })
  
  }
   
  
  render(){
     return(
       <div className='main'>
        <div className='Title'>
          <h1 className='text-center'>Go Ride Your Bike</h1>
        </div>
        <div ClassName='myForm'>
          <div className='form-group'>
          <button onClick= {()=> this.mtbTrails()}>test</button>
          </div>
        </div>

       </div>
  
     )
   }

  }
  export default App;

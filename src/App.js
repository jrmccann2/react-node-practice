import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

 class App extends Component {
   constructor(){
     super();

     this.state = {
       friends: [],
       name: '',
       image: ''
     }
     this.handleInputs = this.handleInputs.bind(this)
     this.addFriend = this.addFriend.bind(this)
   }

   componentDidMount(){
     axios.get('/api/friends')
        .then( res => {
          console.log(res.data)
          this.setState({friends: res.data})
        })
   }

   handleInputs(e){
    this.setState({[e.target.name]: e.target.value})
   }

   addFriend(){
     const { name, image } = this.state;
     this.setState({friends: [...this.state.friends, {name, image}]})
   }

   render(){
     return (
       <div className="App">
         <input placeholder="Name" name="name" onChange={(e) => this.handleInputs(e)}></input>
         <input placeholder="Image URL" name="image" onChange={(e) => this.handleInputs(e)}></input>
         <button onClick={this.addFriend}>Add Friend</button>
       </div>
     );
  }
}

export default App;

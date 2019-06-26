import React, {Component} from 'react';

/**
 * If you are using App.js as a class based component you must import Component
 * and change `function App() {` to `class App extends Component {` (line 15). It is
 * best to keep App.js as a functional component that simply displays other 
 * components but as you're getting started do what you're most comfortable with.
 */

import logo from './logo.svg';
import './App.css';

import axios from 'axios'; // axios is a helper library for making HTTP requests

 class App extends Component {
   constructor(){ 
     /**
      * allows us to initialize `this.state` and bind our methods
      */
     super(); 
     
     /**
      * super() invokes the constructor of the extended class (Component). This is
      * what gives us access to the `this` keyword and must be invoked if your
      * class based component has a constructor function.
      */

     this.state = {
       friends: [],
       name: '',
       image: ''
     }
     this.handleInputs = this.handleInputs.bind(this)
     this.addFriend = this.addFriend.bind(this)
   }

   /**
    * componentDidMount fires after the constructor and the initial render.
    * We then make an HTTP request using axios to our server to get our list
    * of friends. Note that the method (get) and the url (`/api/friends`) is
    * very descriptive of what resource we are interacting with and how we
    * are interacting with it (get friends). We then put the returned array
    * on state using setState.
    */

   componentDidMount(){
     axios.get('/api/friends')
        .then( res => {
          console.log(res.data)
          this.setState({friends: res.data})
        })
   }

   /**
    * This handleInputs method is a great way to allow one method to
    * update state for all of our input boxes. It takes in a parameter
    * which is the onChange event. We then use bracket notation to 
    * target which property we will be updating on state `[e.target.name]`
    * The value that is then put on state is the text (value) currently
    * inside of our input element (e.target) that was changed.
    */

   handleInputs(e){
    this.setState({[e.target.name]: e.target.value})
   }

   /**
    * The addFriend method is currently only hooked up to update state.
    * The next step would be to change it so that instead it creates a
    * friend on our master list which is stored on our server. The HTTP
    * method to create an entry is post so it might look something like
    * this:
    * 
    *   axios.post('/api/friend', {name, image})
    *       .then( response => this.setState({friends: response.data}))
    *       .catch( err => console.log(err))
    */

   addFriend(){
     const { name, image } = this.state;
     this.setState({friends: [...this.state.friends, {name, image}]})
   }

   render(){

    /**
     * Our input boxes here have two very important pieces to note. First, the
     * `name` property on our input boxes is what we referred to on line 64
     * when we used `e.target.name`. e.target is the element that was the target
     * of the event (the specific input element being typed in). Second, the 
     * onChange which is what listens for this event and then invokes a function
     * whenever a change event occurs. 
     */
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

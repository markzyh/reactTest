import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SubmitMessage from './components/submitMessage'
import MessageList from './components/messageList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments : ['this is my first reply']
    }
    this.addComments = this.addComments.bind(this)
    this.deleteMsg = this.deleteMsg.bind(this)
  }
  addComments(msg){
    console.log(msg.toString())
    let array = this.state.comments
    let newArray = [...array,msg]
    this.setState({
      //comments:this.state.comments.push(msg)
      
      comments:newArray

    })
    console.log(this.state.comments)
  }
  deleteMsg(index){
    console.log(index)
    let array = this.state.comments
    let newArray = [...array]
    newArray.splice(index,1)
    this.setState({
      comments:newArray
    })
    console.log(this.state.comments)
  }
  render() {
    return (
      <div className="App">
        {}
        <MessageList messages={this.state.comments} onDeleteMsg={this.deleteMsg}/>
        <SubmitMessage onAddComments={this.addComments}/>
      </div>
    );
  }
}

export default App;

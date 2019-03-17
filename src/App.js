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
    this.setState({
      //comments:this.state.comments.push(msg)
      
      comments:[...this.state.comments,msg]

    })
    console.log(this.state.comments)
  }
  deleteMsg(index){
    console.log(index)
    const newcomments = this.state.comments.splice(index,1)
    this.setState({
      comments:newcomments
    })
    console.log(this.state.comments)
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <MessageList messages={this.state.comments} onDeleteMsg={this.deleteMsg}/>
        <SubmitMessage onAddComments={this.addComments}/>
      </div>
    );
  }
}

export default App;

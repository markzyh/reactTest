import React from 'react'
class MessageList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }
    
    
    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                {this.props.messages.map((item,index) =>
                        <li key={index}>{item} <span onClick={() =>{this.props.onDeleteMsg(index)}}>X</span></li>
                    )}
                </ul>
            </div>
        )
    }
}
/* const MessageList = (props) =>{
    console.log(props)

    return(
        <div>
            <ul>
            {props.messages.map((item,index) =>
                    <li key={index}>{item} <span onClick={() =>{props.onDeleteMsg(index)}}>X</span></li>
                )}
            </ul>
        </div>
    )
} */
/* function deleteMsg(index){
    console.log(index)
} */
export default MessageList
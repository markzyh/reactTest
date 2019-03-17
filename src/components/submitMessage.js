import React from 'react'
 class MessageBox extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             value: ''
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
     }
     handleChange(event){
        this.setState({
            value: event.target.value
        })
     }
     handleSubmit(event){
        //alert(this.state.value)
        // alert(this.textInput.value)
        
        this.props.onAddComments(this.textInput.value)
        event.preventDefault()
        this.textInput.value = ''
     }
     render(){
         return (
         <form className='p-5' onSubmit={this.handleSubmit}>
             <div className="form-group">
                <label>留言:</label>
                {/* <input
                    type="text"
                    className='form-control'
                    placeholder="请输入内容"
                    onChange={this.handleChange}
                    value={this.state.value}
                />  */}
                {<input
                    type="text"
                    className='form-control'
                    placeholder="请输入内容"
                    ref={(textInput) =>{this.textInput = textInput}}
                /> }
                <button type="submit" className="btn btn-primary">留言</button>
             </div>
         </form>
         )
     }
 }
 export default MessageBox
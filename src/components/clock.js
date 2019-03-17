import React from 'react'

class Dclock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date : new Date()
        }
        this.updateDate = this.updateDate.bind(this)
    }
    updateDate(){
        this.timer = setInterval(() =>{
            this.setState({
                date : new Date()
            })
        },3000)
    }
    componentDidMount(){
        this.updateDate()
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    componentDidUpdate(currentProps,currentState){
        console.log(currentState)
    }
    render(){
        return (
            <div>
                时间:{this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Dclock
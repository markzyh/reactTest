 import React from 'react'

 class LikesButton extends React.Component{
     constructor(props){
        super(props)
        this.state = {
            likes : 0
        }
        //this.increaseLikes = this.increaseLikes.bind(this)
     }
     increaseLikes(){
         console.log(this)
         /* this.setState({
             likes: ++this.state.likes
         }) */
     }
     render(){
         return (
            <div>
                <h3 onClick={() => {this.increaseLikes()}}>点赞数{this.state.likes}</h3>
            </div>
         )
     }
 }
  export default LikesButton
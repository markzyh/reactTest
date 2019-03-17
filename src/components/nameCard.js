import React from 'react'
// import Clock from './clock';
import MessageBox from './messageBox';

/*  class NameCard extends React.Component{
     render(){
          const { name, number, isHuman, tags} = this.props
          return (
              <div>
                <h1>姓名: {name}</h1>
                <h2>电话:{number}</h2>
                <h3>{isHuman ? '人类':'外星人'}</h3>
                <ul>标签:
                    {
                        tags.map((item,index) =>
                            <li key={index}>{item}</li>
                    )
                    }
                </ul>
              </div>
          )
     }
 } */
 const NameCard1 = (props) =>{
    const { name, number, isHuman, tags} = props
    return (
        <div>
          <h1>姓名: {name}</h1>
          <h2>电话:{number}</h2>
          <h3>{isHuman ? '人类':'外星人'}</h3>
          <ul>标签:
              {
                  tags.map((item,index) =>
                      <li key={index}>{item}</li>
              )
              }
          </ul>
          {/* <Clock/> */}
          <MessageBox value="哈哈哈"/>
        </div>
    )
 }
  export default NameCard1
import React from 'react'

class Welcome extends React.Component{
    render(){
        const isLogin = false
        const aa = <h1>hhhh</h1>
        console.log(aa)
        return (
            <div>
                {isLogin ? <h1>已经登录</h1> : <h1>请登录</h1>}
            </div>
        )
    }
}

export default Welcome
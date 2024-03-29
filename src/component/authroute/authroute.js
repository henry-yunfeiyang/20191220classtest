import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import {connect} from 'react-redux'

//进行判断是否登陆并进行路由跳转
@withRouter
@connect(
	null,
	{loadData}
)
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        //获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                
                if(res.data.code===0){
                    // console.log("authroute--->user/info-->data",res.data.data);
                    this.props.loadData(res.data.data)
                }else{
                    this.props.history.push('/login')
                }
                // console.log(res.data);
            }
        })
        //用户状态：是否登陆 
     
        //用户是否完善信息（头像，简介）
    }
    render(){
        return null
    }
}
export default AuthRoute
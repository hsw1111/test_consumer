// 1.导入react
import React from 'react'
import ReactDOM from 'react-dom'

import {
  HashRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'
import Home from '../../components/Home/index'
import Login from '../../components/Login/index'
import UserManage from '../../components/UserManage/User.js'
import Detail from '../../components/UserManage/Detail/index'
// 2.引入根组件
// import App from '../../components/App'


// 3.渲染组件
ReactDOM.render(<Router history={HashRouter}>
  <div>
  <Route path="/" exact component={Login}/>
  {/*登录页*/}
  <Route path="/login" component={Login}/>
  {/*用户管理*/}
  <Route path="/usermanage/user/detail" ecaxt component={Detail}/>
  <Route path="/usermanage/user" component={Home} />
  

  
</div>
</Router>,document.getElementById("app"))
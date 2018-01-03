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
import User from '../../components/Usermanage/User.js'
import Detail from '../../components/Usermanage/Detail/index'
import Orders from '../../components/Usermanage/Orders/index'
import TripTicket from '../../components/Usermanage/TripTicket.js'
// 2.引入根组件
// import App from '../../components/App'


// 3.渲染组件
ReactDOM.render(<Router>
  <div>
  <Route path="/" exact component={Login}/>
  {/*登录页*/}
  <Route path="/login" component={Login}/>
  {/*用户管理*/}
  <Route path="/usermanage"  component={Home} >
    <Route path="user" component={User}>
      <Route path="detail" component={Detail}/>
    </Route>
  </Route>
  

  
</div>
</Router>,document.getElementById("app"))
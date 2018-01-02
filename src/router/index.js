import React from 'react'
import ReactDOM from 'react-dom'

import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


  
let RouterComponts = <Router>
{/*首页*/}
<Route path="/" getComponent={(nextState, callback) => {
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/App.js").default)
                                },"index");
                            }}/>
{/*登录页*/}
<Route path="/login" getComponent={(nextState, callback) => {
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/Login/index.js").default)
                                },"login")
                            }}/>
{/*用户管理*/}
<Route path="/usermanage" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/UserManage/User.js").default)
                                    },"usermanage")
                                }} />
{/*订单管理*/}
{/* <Route path="/ordermanage" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/OrderManage/index.js").default)
                                    },"ordermanage")
                                }} /> */}
{/*押金管理*/}
{/* <Route path="/depositmanage" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/DepositManage/index.js").default)
                                    },"depositmanage")
                                }} /> */}

{/*余额管理*/}
{/* <Route path="/balancemanage" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/BalanceManage/index.js").default)
                                    },"balancemanage")
                                }} /> */}

{/*车辆管理*/}
{/* <Route path="/carmanage" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/CarManage/index.js").default)
                                    },"carmanage")
                                }} /> */}
{/*违停上报*/}
{/* <Route path="/illegallypark" getComponent={(nextState, callback)=>{
                                    require.ensure([],(require)=>{
                                        callback(null, require("../components/Illegallypark/index.js").default)
                                    },"illegallypark")
                                }} /> */}
{/*活动信息*/}
{/* <Route path="/activitymessage" getComponent={(nextState, callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/ActivityMessage/index.js").default)
                                },"activitymessage")
                            }} /> */}

{/*账号管理*/}
{/* <Route path="/accountmanage" getComponent={(nextState, callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/AccountManage/index.js").default)
                                },"accountmanage")
                            }} /> */}
{/*角色管理*/}
{/* <Route path="/roleManage" getComponent={(nextState, callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/RoleManage/index.js").default)
                                },"roleManage")
                            }} /> */}
{/*系统日志*/}
{/* <Route path="/systemlog" getComponent={(nextState, callback)=>{
                                require.ensure([],(require)=>{
                                    callback(null, require("../components/SystemLog/index.js").default)
                                },"systemlog")
                            }} /> */}


</Router>
export default RouterComponts



// 路由按需加载
// const rootRoute = {
//   path:"/",
//   indexRoute:{
//     getComponent(nextState,cb){
//       require.ensure([],(require)=>{
//         cb(null, require('./components/Home/index'))
//       },'Home')
//     }
//   }
// }
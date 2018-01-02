import React from 'react'
import ReactDom from 'react-dom'
import { Layout, Menu, Breadcrumb, Icon,Tooltip, Modal,Form,Select,Input,Button} from 'antd'
import './index.css'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import User from '../Usermanage/User'
import Message from '../Usermanage/Message'
import Authcode from '../Usermanage/Authcode'
import Userinfo from '../Usermanage/Userinfo'
const { SubMenu } = Menu
const { Header, Content,Sider } = Layout
const Option = Select.Option;
const FormItem = Form.Item;



class Home extends React.Component{
  constructor(props){
    super(props)
    this.text = <span onClick={this.showModal} className="editPassword">修改密码</span>;
    this.state = {
        mode: 'inline',
        theme: 'light',
        visible: false
    }
  }

  //修改密码模态框
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

// 模态框表单
handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
    }
  });
}


  render(){
    const { visible, confirmLoading, ModalText } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Router>
      <Layout>
         <Modal
         title="修改密码"
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
         cancelText="取消"
         okText='确定'
       >
          <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="原密码"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('old', {
              rules: [{ required: true, message: '请输入原密码' },
            {
              validator: this.checkConfirm
            }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            label="新密码"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('new', {
              rules: [{ required: true, message: '请输入新密码!' }],
            })(
              <Input
                type="password"
                placeholder="6-20位字符，区分大小写"
              />
            )}
          </FormItem>
          <FormItem
            label="确认密码"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('confirmnew', {
              rules: [{ required: true, message: '请输入新密码!' }],
            })(
              <Input
                type="password"
              />
            )}
          </FormItem>
        </Form>
       </Modal>
    <Header className="header">
      <h2 style={{ color: '#fff'}}>蜜蜂出行客服平台</h2>
      <div  className='right_head'>
        <span>
          <Icon type="poweroff"/>
        </span>
        <Tooltip placement="bottom" title={this.text}>
          <span style={{height:40}}>管理员</span>
        </Tooltip>
        <span style={{width:40,height:40,borderRadius:'50%',border:'1px solid rgba(250,250,250,0.4)',position:'absolute',left:65,top:12,background:'rgba(250,250,250,0.4)'}}></span>
        <span>
          <Icon type="user"  style={{fontSize:28,marginTop:16}}  />
        </span>
        
      </div>
      
    </Header>
    <Content>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={260} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="usermanage" title={<span><Icon type="user" /><Link to="/usermanage">用户管理</Link></span>}>
              <Menu.Item key="user"><Link to="/usermanage/user">用户管理</Link></Menu.Item>
              <Menu.Item key="message"><Link to="/usermanage/message">短信管理</Link></Menu.Item>
              <Menu.Item key="authcode"><Link to="/usermanage/authcode">验证码信息</Link></Menu.Item>
              <Menu.Item key="userInfo"><Link to="/usermanage/userInfo">用户信息</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="ordermanage"><Icon type="laptop" />订单管理</Menu.Item>
            <SubMenu key="depositmanage" title={<span><Icon type="wallet" />押金管理</span>}>
              <Menu.Item key="deposit">押金管理</Menu.Item>
              <Menu.Item key="depositwithdraw">提现信息</Menu.Item>
            </SubMenu>
            <SubMenu key="balancemanage" title={<span><Icon type="pay-circle-o" />余额管理</span>}>
              <Menu.Item key="balance">余额管理</Menu.Item>
              <Menu.Item key="balancewithdraw">提现信息</Menu.Item>
            </SubMenu>
            <SubMenu key="carmanage" title={<span><Icon type="car" />车辆管理</span>}>
              <Menu.Item key="car">车辆信息</Menu.Item>
              <Menu.Item key="battery">车辆电池监控</Menu.Item>
            </SubMenu>
            <Menu.Item key="illegallypark"><Icon type="close-circle-o" />违停上报</Menu.Item>
            <Menu.Item key="activitymessage"><Icon type="message" />活动信息</Menu.Item>
            <Menu.Item key="accountmanage"><Icon type="setting" />账号管理</Menu.Item>
            <Menu.Item key="rolemanage"><Icon type="team" />角色管理</Menu.Item>
            <Menu.Item key="systemlog"><Icon type="form" />系统日志</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Route path="/usermanage/user" component={User}></Route>
          <Route path="/usermanage/message" component={Message}></Route>
          <Route path="/usermanage/authcode" component={Authcode}></Route>
          <Route path="/usermanage/userInfo" component={Userinfo}></Route>
        </Content>
      </Layout>
    </Content>
  </Layout>
  </Router>
    )
  }
}
const HomeWrap = Form.create()(Home);
export default HomeWrap

import React from 'react'
import './index.css'

// 导入组件
import {Layout,Form, Icon, Input, Button, Checkbox} from 'antd'
const FormItem = Form.Item
const{Footer} = Layout

class LoginForm extends React.Component{
  constructor(props){
    super(props)
    
    console.log(props)

  }

  // 点击登录
  handleSubmit= (e) =>{
    e.preventDefault();
    console.log(this.props)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        return
      }
    });
    console.log(this.props)
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="wrap">
        <h1 className="title">蜜蜂出行客服平台</h1>
        <div className="form_wrap">
          <h2>登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名' }],
                })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
        <p className='bottom'>北京蜜蜂出行科技有限公司版权所有@2017</p>
      </div>
      


    )
  }
}
const Login = Form.create()(LoginForm)
export default Login

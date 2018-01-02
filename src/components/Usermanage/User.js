import React from 'react'
import { Select,InputNumber,DatePicker,Input,Button,Table,Popconfirm,Modal} from 'antd';
import './css/user.css'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import $ from 'jquery'
const Option = Select.Option;
const InputGroup = Input.Group;
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `zs${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    phone:`1333333333${i}`,
    city:'合肥',
    status:'押金用户',
    yajin:'已交押金',
    score:i,
    account:100+i,
    time:2017/11/20

  });
}

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class User extends React.Component{
  constructor(props){
    super(props)
    const _this = this
    console.log(_this)
    this.columns = [{
      title: '用户编号',
      dataIndex: 'num',
      width: '10%',
      render: (text, record) => {
        return (
          <Link to="/usermanage/user/detail"  target="_blank">12345</Link>
        );
      },
    }, {
      title: '用户姓名',
      dataIndex: 'name',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'age'),
    }, {
      title: '手机号',
      dataIndex: 'phone',
      width: '12%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    },  {
      title: '登陆城市',
      dataIndex: 'city',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '用户状态',
      dataIndex: 'status',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '注册时间',
      dataIndex: 'time',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '账户余额',
      dataIndex: 'account',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '信用积分',
      dataIndex: 'score',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '押金状态',
      dataIndex: 'yajin',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    },{
      title: '操作',
      width: '6%',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          <div className="more_wrap">
            <a href="javascript:;" className='operation'>更多</a>
            <ul className="more_operation">
              <li onClick={()=>{window.open('#/usermanage/user/detail')}}>查看详情</li>
              <li onClick={()=>{window.open('#/orders')}}>查看订单</li>
              <li onClick={this.showModal}>拉黑</li>
              <li>余额管理</li>
              <li>出行券管理</li>
              <li>信用积分管理</li>
              <li>冻结用户押金</li>
              <li>修改手机号</li>
              <li>清除验证码限制</li>
            </ul>
          </div>
        );
      },
    }];
    this.state = { data ,visible: false};
    this.cacheData = data.map(item => ({ ...item }));

  }
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
  //鼠标移入更多
  more(e){
    console.log(111111111111111)
    $(e.target).siblings().css("display","block")
  }
  //鼠标移出更多
  nomore(e){
    $(e.target).css("display","none")
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  handleChange = (value) => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }
  onChange = (value)=> {
    console.log('changed', value);
  }

  render(){
    return ( 
      <div>
        <div>
          <h2>用户管理</h2>
          <div className="search_wrap clearfix">
            <div className="item">
              <span>用户状态：</span>
              <Select labelInValue defaultValue={{ key: '全部用户' }} style={{ width: 120 }} onChange={(value)=>{this.handleChange(value)}}>
                <Option value="0">全部用户</Option>
                <Option value="1">仅注册用户</Option>
                <Option value="2">缴纳押金用户</Option>
                <Option value="3">已退押金用户</Option>
                <Option value="4">VIP用户</Option>
                <Option value="5">黑名单用户</Option>
              </Select>
            </div>
            <div className="item">
              <span>城市：</span>
              <Select labelInValue defaultValue={{ key: '全部用户' }} style={{ width: 120 }} onChange={(value)=>{this.handleChange(value)}}>
                <Option value="0">全部用户</Option>
                <Option value="1">仅注册用户</Option>
                <Option value="2">缴纳押金用户</Option>
                <Option value="3">已退押金用户</Option>
                <Option value="4">VIP用户</Option>
                <Option value="5">黑名单用户</Option>
              </Select>
            </div>
            <div className="item">
              <span>账号余额：</span>
              <InputNumber size="default" width={40} min={1} max={100000}  onChange={(value)=>{this.onChange(value)}} />
              <span>&nbsp;&nbsp;至&nbsp;&nbsp;</span>
              <InputNumber size="default" min={1} max={100000}  onChange={(value)=>{this.onChange(value)}} />
            </div>
            <div className="item time">
              <span>注册时间：</span>
              <DatePicker onChange={onChange}  placeholder="请选择开始时间"/>
              <span>&nbsp;&nbsp;至&nbsp;&nbsp;</span>
              <DatePicker onChange={onChange}  placeholder="请选择结束时间"/>
            </div>
              <div className="item search_type">
                <span  style={{float:'left',marginTop:5}}>精确搜索：</span>
                <InputGroup compact  width={300}>
                  <Select defaultValue="phone">
                    <Option value="phone">手机号</Option>
                    <Option value="name">用户姓名</Option>
                    <Option value="bianhao">用户编号</Option>
                  </Select>
                  <Input style={{ width: 200 }}  />
                </InputGroup>
              </div>
              <Button type="primary" style={{float:'left'}}>查询</Button>
          </div>

        </div>
        <div className="content_bottom">
          <Table bordered dataSource={this.state.data} columns={this.columns} />
        </div>
        <div>
          <Modal
            title="拉黑"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>确定是否把用户"12323"拉黑？</p>
            <p>拉黑后，用户无法再租用小蜜蜂。</p>
            <h3>备注：</h3>
            
          </Modal>
        </div>
      </div>
     )
  }
}

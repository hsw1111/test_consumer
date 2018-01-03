import React from 'react'
import { Select,InputNumber,DatePicker,Input,Button,Table,Popconfirm,Modal} from 'antd'
import './css/user.css'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import $ from 'jquery'
const Option = Select.Option
const InputGroup = Input.Group
const { TextArea } = Input
//用户数据
const data = []
//余额管理数据
const data1 = []
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
    time:'2017/11/20'

  })
  data1.push({
    key:i,
    person:'zs'+i
  })
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
    // 用户数据表
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
        render: (text, record) => this.renderColumns(text, record, 'name'),
      }, {
        title: '手机号',
        dataIndex: 'phone',
        width: '12%',
        render: (text, record) => this.renderColumns(text, record, 'phone'),
      },  {
        title: '登陆城市',
        dataIndex: 'city',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'city'),
      }, {
        title: '用户状态',
        dataIndex: 'status',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'status'),
      }, {
        title: '注册时间',
        dataIndex: 'time',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'time'),
      }, {
        title: '账户余额',
        dataIndex: 'account',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'account'),
      }, {
        title: '信用积分',
        dataIndex: 'score',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'score'),
      }, {
        title: '押金状态',
        dataIndex: 'yajin',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'yajin'),
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
                <li onClick={()=>{window.open('#/usermanage/user/orders')}}>查看订单</li>
                <li onClick={this.showModal}>拉黑</li>
                <li onClick={this.showModal1}>余额管理</li>
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
    // 余额管理数据表
    this.columns1 = [{
      title: '编号',
      dataIndex: 'num',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'num'),
      }, {
        title: '时间',
        dataIndex: 'time',
        width: '20%',
        render: (text, record) => this.renderColumns(text, record, 'time'),
      }, {
        title: '操作人',
        dataIndex: 'person',
        width: '15%',
        render: (text, record) => this.renderColumns(text, record, 'person'),
      },  {
        title: '增加/减少金额',
        dataIndex: 'city',
        width: '20%',
        render: (text, record) => this.renderColumns(text, record, 'city'),
      }, {
        title: '当前总余额',
        dataIndex: 'allMoney',
        width: '15%',
        render: (text, record) => this.renderColumns(text, record, 'allMoney'),
      }, {
        title: '备注',
        dataIndex: 'tips',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'tips'),
    }];
    this.state = { data ,visible: false,visible1: false,data1};
    this.cacheData = data.map(item => ({ ...item }));

  }
  // 拉黑的弹窗
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
  //余额管理的弹窗
  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  }
  handleOk1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
    });
  }
  handleCancel1 = (e) => {
    console.log(e);
    this.setState({
      visible1: false,
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
          <Table 
            bordered dataSource={this.state.data} 
            columns={this.columns} 
            pagination={{hideOnSinglePage:true,showQuickJumper:true,showTotal:function(total,range){return `显示${range[0]}到${range[1]}条,共 ${total} 条`}}}
             />
        </div>
        {/* 拉黑模态框 */}
        <div className="lahei">
          <Modal
            title="拉黑"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            cancelText="取消"
            okText="确定"
          >
            <p>确定是否把用户"12323"拉黑？</p>
            <p className='cant'>拉黑后，用户无法再租用小蜜蜂。</p>
            <h3 className='tips'><span className='icon'>*</span>备注：</h3>
            <TextArea rows={4} />
          </Modal>
        </div>
        {/* 余额管理模态框 */}
        <div>
          <Modal
            title="余额管理"
            visible={this.state.visible1}
            onOk={this.handleOk1}
            onCancel={this.handleCancel1}
            width='900px'
            footer={null}
          >
            <div className="yue">
              <p><span style={{marginRight: '40px'}}>用户编号：29999</span> <span>手机号：13333333333</span></p>
              <p>用户当前余额：<span style={{color:'orange'}}>999.0</span>元（充值金额900.0元+赠送金额99.0元）</p>
              <p className="input_wrap"><span className='icon'>*</span><span>金额：</span><Input placeholder="正数为增加，负数为减少" /></p>
              <p className="input_wrap"><span style={{float:'left'}}>备注：</span><TextArea rows={3}/></p>
              <Button type="primary" className='ok'>确定</Button><Button className='cancle'>取消</Button>
            </div>
            <h3 className="record">赠送余额充值记录</h3>
            <Table bordered dataSource={this.state.data1} columns={this.columns1} />
          </Modal>
        </div>
      </div>
     )
  }
}

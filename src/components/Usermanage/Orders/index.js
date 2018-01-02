import React from 'react'
import {Table} from 'antd'
import '../css/orders.css'
import {
  Link
} from 'react-router-dom' 
const data = [];
for (var i = 0; i < 50; i++){
  data.push({
    bikeNum:i,
    key:i
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
export default class Orders extends React.Component{
  constructor(props){
    super(props)
    this.columns = [{
      title: '订单编号',
      dataIndex: 'orderNum',
      width: '8%',
      render: (text, record) => {
        return (
          <Link to="/usermanage/user/detail"  target="_blank">12345</Link>
        );
      },
    }, {
      title: '下单时间',
      dataIndex: 'startTime',
      width: '8%',
      render: (text, record) => this.renderColumns(text, record, 'age'),
    }, {
      title: '结束时间',
      dataIndex: 'endTime',
      width: '8%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    },  {
      title: '取车时续航里程',
      dataIndex: 'startMilliage',
      width: '12%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '车辆编号',
      dataIndex: 'bikeNum',
      width: '8%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '取车地点',
      dataIndex: 'startSide',
      width: '8%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '骑行时间(h)',
      dataIndex: 'bikeTime',
      width: '9%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '骑行里程(m)',
      dataIndex: 'bikeMilliage',
      width: '9%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '订单费用(¥)',
      dataIndex: 'money',
      width: '9%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
    }, {
      title: '订单状态',
      dataIndex: 'orderStatus',
      width: '8%',
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
              <li onClick={()=>{window.open('#/usermanage/user/detail')}}>结束订单</li>
              <li onClick={()=>{window.open('#/orders')}}>车辆开锁</li>
              <li>车辆关锁</li>
            </ul>
          </div>
        );
      },
    }];
    this.state = { data };
    this.cacheData = data.map(item => ({ ...item }));
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
  render(){
    return(
      <div className="user_order">
        <h2>用户订单</h2>
        <div className="content">
          <div className="center">
            <p className="clearfix">
              <span>用户编号：123123</span>
              <span>用户姓名：zs</span>
            </p>
            <p className="clearfix">
              <span>手机号：13343333333</span>
              <span>所属城市：北京</span>
            </p>
          </div>
          <h3>订单信息</h3>
          <div>
             <Table bordered dataSource={this.state.data} columns={this.columns} />
          </div>
        </div>
        
      </div>
    )
  }
}
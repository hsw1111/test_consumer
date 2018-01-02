import React from 'react'
import { Tabs,Table, Input, Popconfirm } from 'antd'
import '../css/detail.css'
const TabPane = Tabs.TabPane
export default class Detail extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    var data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        key:i,
        num: i,
      });
    }
    this.state = {
       data : data,
       columns: [{
        title: '编号',
        dataIndex: 'num',
        width: '15%',
      }, {
        title: '时间',
        dataIndex: 'time',
        width: '15%',
       
      }, {
        title: '操作人',
        dataIndex: 'person',
        width: '15%',
  
      },  {
        title: '增加/减少金额',
        dataIndex: 'money',
        width: '15%',
  
      }, {
        title: '当前余额',
        dataIndex: 'nowMoney',
        width: '15%',
  
      },  {
        title: '备注',
        dataIndex: 'tips',
        width: '15%',
  
      }]
    };
    // console.log(this.state.data)
  }

  callback(key) {
    console.log(key);
    var data = []
    if(key=='1'){
      data = []
      for (let i = 0; i < 10; i++) {
        data.push({
          key:i,
          num: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '编号',
          dataIndex: 'num',
          width: '15%',
        }, {
          title: '时间',
          dataIndex: 'time',
          width: '15%',
         
        }, {
          title: '操作人',
          dataIndex: 'person',
          width: '15%',
    
        },  {
          title: '增加/减少金额',
          dataIndex: 'money',
          width: '15%',
    
        }, {
          title: '当前余额',
          dataIndex: 'nowMoney',
          width: '15%',
    
        },  {
          title: '备注',
          dataIndex: 'tips',
          width: '15%',
    
        }]
      })
    }else if(key=='2'){
      data = []
      for (let i =  20; i > 0; i--) {
        data.push({
          key:i,
          type: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '操作类型',
          dataIndex: 'type',
          width: '25%',
        }, {
          title: '操作人',
          dataIndex: 'person',
          width: '25%',
         
        }, {
          title: '操作时间',
          dataIndex: 'time',
          width: '25%',
    
        },{
          title: '备注信息',
          dataIndex: 'tips',
          width: '25%',
    
        }]
      })
    }else if(key=='3'){
      data = []
      for (let i =  99; i > 0; i--) {
        data.push({
          key:i,
          num: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '编号',
          dataIndex: 'num',
          width: '14%',
        }, {
          title: '发放金额',
          dataIndex: 'money',
          width: '14%',
         
        }, {
          title: '获得时间',
          dataIndex: 'getTime',
          width: '14%',
    
        },{
          title: '消费时间',
          dataIndex: 'shopTime',
          width: '14%',
        },{
          title: '消费订单',
          dataIndex: 'shopOrder',
          width: '14%',   
        },{
          title: '到期时间',
          dataIndex: 'endTime',
          width: '14%',   
        },{
          title: '获得类型',
          dataIndex: 'getType',
          width: '15%',   
        }]
      })
    }else if(key=='4'){
      data = []
      for (let i =  70; i > 0; i--) {
        data.push({
          key:i,
          discount: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '编号',
          dataIndex: 'num',
          width: '10%',
        }, {
          title: '折扣',
          dataIndex: 'discount',
          width: '10%',
         
        },{
          title: '充值金额（¥）',
          dataIndex: 'czMoney',
          width: '10%',
    
        }, {
          title: '获得时间',
          dataIndex: 'getTime',
          width: '10%',
    
        },{
          title: '消费时间',
          dataIndex: 'shopTime',
          width: '10%',
        },{
          title: '消费订单',
          dataIndex: 'shopOrder',
          width: '10%',   
        },{
          title: '到期时间',
          dataIndex: 'endTime',
          width: '10%',   
        },{
          title: '获得类型',
          dataIndex: 'getType',
          width: '10%',   
        }]
      })
    }else if(key=='5'){
      data = []
      for (let i =  70; i > 0; i--) {
        data.push({
          key:i,
          person: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '编号',
          dataIndex: 'num',
          width: '10%',
        }, {
          title: '操作时间',
          dataIndex: 'time',
          width: '10%',
         
        },{
          title: '操作人',
          dataIndex: 'person',
          width: '10%',
    
        }, {
          title: '奖惩类型',
          dataIndex: 'jcType',
          width: '10%',
    
        },{
          title: '处理类型',
          dataIndex: 'dealType',
          width: '10%',
        },{
          title: '积分',
          dataIndex: 'score',
          width: '10%',   
        },{
          title: '剩余总积分',
          dataIndex: 'syScore',
          width: '10%',   
        },{
          title: '备注',
          dataIndex: 'tips',
          width: '10%',   
        }]
      })
    }else if(key=='6'){
      data = []
      for (let i =  20; i > 0; i--) {
        data.push({
          key:i,
          type: i,
        });
      }
      this.setState({
        data:data,
        columns : [{
          title: '操作类型',
          dataIndex: 'type',
          width: '25%',
        }, {
          title: '操作人',
          dataIndex: 'person',
          width: '25%',
         
        }, {
          title: '操作时间',
          dataIndex: 'time',
          width: '25%',
    
        },{
          title: '备注信息',
          dataIndex: 'tips',
          width: '25%',
    
        }]
      })
    }
    
  }
  render(){
    return (
      <div className="user_detail">
        <h2>用户详情</h2>
        <div className="content">
          <div className="center">
            <p className="clearfix">
              <span>用户编号：123123</span>
              <span>用户状态：认证用户</span>
            </p>
            <p className="clearfix">
              <span>用户姓名：zs</span>
              <span>信用积分：123</span>
            </p>
            <p className="clearfix">
              <span>手机号：13343333333</span>
              <span>押金状态：正常</span>
            </p>
            <p className="clearfix">
              <span>所属城市：北京</span>
              <span>最近一次订单：</span>
            </p>
            <p className="clearfix">
              <span>余额：300.0元 （充值金额200.0元+赠送金额100.0元）</span>
              <span>最近一次订单时间：</span>
            </p>
            <p className="clearfix">
              <span>注册时间：2017-10-10 10:11:11</span>
            </p>
          </div>
          <h3>备注信息</h3>
          <div>
            <Tabs defaultActiveKey="1" onChange={(key)=>{this.callback(key)}}>
              <TabPane tab="余额" key="1">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
              <TabPane tab="押金" key="2">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
              <TabPane tab="出行券" key="3">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
              <TabPane tab="权益卡" key="4">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
              <TabPane tab="信用积分" key="5">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
              <TabPane tab="拉黑" key="6">
                <Table bordered dataSource={this.state.data} columns={this.state.columns} />
              </TabPane>
            </Tabs>
          </div>
        </div>
        
      </div>
    )
  }
}
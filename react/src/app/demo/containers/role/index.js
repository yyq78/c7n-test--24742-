import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Icon ,Menu,Dropdown} from 'choerodon-ui';
import { Action} from '@choerodon/boot';
import Store from './stores/index';
import './style/pageHead.less';
import {Link} from 'react-router-dom';
@observer
class Role extends Component { 
  constructor(props){
    super(props);
    this.state={
      MAP:["全局","组织","项目"]
    }
  }
  componentDidMount() {
    Store.loadData();
  }
  renderTable = () => {
    const allData=Store.data.slice();
    const {isLoading,pagination}=Store;
    const dataSource=[];
    const columns=[{
        title:"角色名称",
        dataIndex:"name",
        key:"name"
      },
      {
        title:"角色编码",
        dataIndex:"code",
        key:"code",
        render:text=>{
          return(
            <span style={{"textOverflow": "ellipsis","whiteSpace": "nowrap","overflow": "hidden"}}>{text}</span>
          )
        }
      },
      {
        title:"角色来源",
        dataIndex:"source",
        key:"source",
        render:text=>{
          return (<span>
            {text?text:"自定义"}
          </span>)
        }
      },
      {
        title:"启用状态",
        dataIndex:"state",
        key:"state",
        render:  text => {
          if(text){
            return(
            <span>
              <Icon type="check_circle"  style={{ color: '#00bfa5' }}/> 启用
            </span>
            )
            
          }else{
            return(
            <span>
              <Icon type="remove_circle" style={{ color: '#d3d3d3' }}/> 停用
            </span>
            )
          }
        },
      }
    ];
    allData.forEach((item)=>{
      let {id,name,code,description,enabled}=item;
      let obj={key:id,name,code,source:description,state:enabled};
      dataSource.push(obj);
    });
    return (<Table 
      dataSource={dataSource} 
      columns={columns} 
      pagination={pagination} 
      loading={isLoading} 
      onChange={this.handleTableChange}
      ></Table>)
  }
  handleTableChange = (pagination) => {
    console.log(pagination);
    Store.pagination=pagination;
    Store.loadData(
      
     pagination.current,pagination.pageSize,
    );
  }
  toCreat(){
    this.props.history.push("/test/creat");
  }
  render() {
    const MAP=["site","organization","project"];
    const onClick = function ({ key }) {
       Store.level=MAP[key-1];
       Store.loadData();
    };
    const menu=(
      <Menu onClick={onClick}>
          <Menu.Item key="1" value="全局">
            <div>全局</div>
          </Menu.Item>
          <Menu.Item key="2" value="组织">
            <div>组织</div>
          </Menu.Item>
          <Menu.Item key="3" value="项目">
          <div> 项目 </div>
          </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="page-head">
          <span className="page-head-title">角色管理</span>
          <span>
            <Dropdown overlay={menu} placement="bottomCenter" className="menu">
            <a className="c7n-dropdown-link" href="#">
              全局 <Icon type="arrow_drop_down" />
            </a>
            </Dropdown>
          </span>
          <Button onClick={this.toCreat.bind(this)}>创建角色</Button>
        </div>
          {this.renderTable()}
      </div>

       
    )
          
  }
}

export default Role;
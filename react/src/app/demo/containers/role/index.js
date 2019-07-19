import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Icon ,Menu} from 'choerodon-ui';
import { Action} from '@choerodon/boot';
import Store from './stores/index';

@observer
class Role extends Component { 
  constructor(props){
    super(props);
    this.state={};
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
  render() {
    
    return (
      <div>
        {this.renderTable()}
      </div>
       
    )
          
  }
}

export default Role;
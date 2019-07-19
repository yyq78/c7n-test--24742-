import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Table,Icon ,Menu} from 'choerodon-ui';
import { Action} from '@choerodon/boot';
import Store from './stores/index';

@observer
class Role extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
  }
  constructor(props){
    super(props);
    this.state={};
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    Store.loadData();
  }

  renderLevel(text) {
    const LEVEL_MAP = {
      organization: '组织',
      project: '项目',
    };
    return LEVEL_MAP[text] || '全局';
  }

  renderTable = () => {
    const { isLoading, pagination } = Store;
    const columns = [
      {
        title: '角色名称',
        dataIndex: 'name',
        key: 'name',
        width: '25%',
      },
      {
        title: '角色编码',
        dataIndex: 'code',
        key: 'code',
        width: '25%',
      },
      {
        title: '角色来源',
        dataIndex: 'level',
        key: 'level'
      },
      {
        title: '角色状态',
        dataIndex: 'enabled',
        key: 'enabled',
      },
      {
        title: '',
        key: 'action',
        align: 'right',
        render: (text, record) => {
          const actionDatas = [{
            icon: '',
            type: 'site',
            text: '修改',
          }];
          if (record.enabled) {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '停用',
            });
          } else {
            actionDatas.push({
              icon: '',
              type: 'site',
              text: '启用',
            });
          }
          return <Action data={actionDatas} getPopupContainer={() => document.getElementsByClassName('page-content')[0]} />;
        },
      },
    ];
    return (
      <div>
          <Table
            columns={columns}
            dataSource={Store.data.slice()}
            pagination={pagination}
            rowKey={record => record.id}
            onChange={this.handlePageChange}
            loading={isLoading}
            filterBarPlaceholder="过滤表"
          />
      </div>
    );
  }

  render() {
    return (
      <div>
         <div>
            <div>
              {this.renderTable()}
            </div>
         </div>
         
      </div>
    )
          
  }
}

export default Role;
import React,{Component} from 'react';
import { Table, Icon,Button} from 'choerodon-ui';
import Store2 from './stores/index2';
import { observer } from 'mobx-react';
import './style/model.less';
import { Modal} from 'choerodon-ui/pro';

@observer
class Menu extends Component{
    componentDidMount() {
        this.loadData();
    }
    
    loadData = () => {
        Store2.loadData();
    }
    render(){
        const modalKey = Modal.key();
        // 表格事件
        const rowSelection = {
            handleClick:()=>{
                console.log("!s");
                Modal.open({
                    key: modalKey,
                    title: '菜单权限配置',
                    children: <ModalContent />,
                    okProps: { disabled: true, children: '保存' },
                    style: {
                        right: 0,
                        top: 0,
                      },
                    });
            },
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };
        const ModalContent = ({ modal }) => {
            modal.handleOk(() => {
                console.log('do OK');
                return false;
            });
            modal.handleCancel(() => {
                console.log('do Cancel');
            });
            function toggleOkDisabled() {
                modal.update({ okProps:{ disabled: !modal.props.okProps.disabled } });
            }
            return (
                <div>
                    <div>配置菜单“个人信息”的权限</div>
                    <Table columns={columns2} rowSelection={rowSelection} dataSource={Store2.MenuData} />
                </div>
            );
        };
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'Code',
            dataIndex: 'parentCode',
          },
          {
            render:(text,record)=>
            {
                {
                        if(record.type)
                        {
                            return (
                                <Button
                                    onClick={rowSelection.handleClick}
                                    style={{border:'none'}}
                                >
                                    <Icon type="predefine" />
                                </Button>
                            )
                        }
                }
          }
        }
        ];
        const columns2 = [{
            title: '权限',
            dataIndex: 'name',
          }, {
            title: '描述',
            dataIndex: 'age',
          }];
          const data2 = 
          return <Table  columns={columns} rowSelection={rowSelection} dataSource={Store2.MenuData} />
    }
}


export default Menu;
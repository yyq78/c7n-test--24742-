import React,{useState} from 'react';
import { Menu, Dropdown, Icon,Button } from 'choerodon-ui/pro';
import { DataSet, Table, TextField, NumberField, Modal, Tabs } from 'choerodon-ui/pro';
import './index.less';
const { Column } = Table;
const { TabPane } = Tabs;
function Index(){
    const levelMAP={
        "site":"全局",
        "organization":"组织",
        "project":"项目"
    };
    const [level,setState]=useState("选择层级");
    const onClick = function ({ key }) {
        setState(levelMAP[key]);
    };
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="site">全局</Menu.Item>
            <Menu.Item key="organization">组织</Menu.Item>
            <Menu.Item key="project">项目</Menu.Item>
        </Menu>
    );
    const enemyFriendsDs = new DataSet({
        autoQuery: true,
        transport:{
            read: {
                url: '/iam/v1/roles/search?page=1&size=10&sort=id,desc',
                method: 'post',
                data: {
                    level: `site`,
                },
                transformResponse:data => ({
                    list: JSON.parse(data).list,
                }),
            }
        },
        fields: [
          { name: 'name', type: 'string', label: '名称', required: true },
          { name: 'code', type: 'string', label: '编码' },
          { name: 'level', type: 'string', label: '层级'},
          { name: 'description', type: 'object', label: '来源' },
          { name: 'enabled', type: 'string', label: '状态' },
        ],
    });
    const SourceRenderer=function({value}){
        return value?value:(<div><Icon type="av_timer"/><span> 自定义</span></div>);
    }
    const EnableRenderer=function({value}){
        return value=="true"?(<div><Icon type="check_circle" style={{color:"#00bfa5"}}/><span> 启用</span></div>):(<div><Icon type="remove_circle"/> 停用</div>)
    }
    return (
    <div>
        <div className="header">
            <span className="header-title">角色管理</span>
            <span className="header-select">
            <Dropdown overlay={menu}>
                <Button>
                {level} <Icon type="arrow_drop_down" />
                </Button>
            </Dropdown>
            </span>
            <span className="header-button">
                <Button color="blue"><Icon type="playlist_add"></Icon>创建角色</Button>
            </span>
        </div>
        <div className="list">
            角色名单 
            <Table key="friends" dataSet={enemyFriendsDs}>
                <Column name="name" sortable />
                <Column name="code" editor sortable />
                <Column name="level" sortable />
                <Column name="description" sortable renderer={SourceRenderer}/>
                <Column name="enabled" width={150} renderer={EnableRenderer}/>
            </Table>
        </div>
    </div>)
    
}
export default Index;
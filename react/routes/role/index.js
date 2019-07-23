import React,{useState} from 'react';
import { DataSet, Table,Menu, Dropdown, Icon,Button,Tabs } from 'choerodon-ui/pro';
import RoleDataSet from './stores/RoleDataSet';

import './index.less';
const { Column } = Table;
function Index(){
    const levelMap={
        "全局":"site",
        "组织":"organization",
        "项目":"project"
    };
    const [level,setState]=useState("全局");
    const onClick = function ({ key }) {
        setState(key);
        // const enemyFriendsDs = new DataSet(RoleDataSet(key));
    };
    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key="全局">全局</Menu.Item>
            <Menu.Item key="组织">组织</Menu.Item>
            <Menu.Item key="项目">项目</Menu.Item>
        </Menu>
    );
    const enemyFriendsDs = new DataSet(RoleDataSet(levelMap[level]));
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
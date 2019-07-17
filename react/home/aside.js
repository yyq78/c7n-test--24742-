import React,{Component} from 'react';
import { Menu, Icon, Button } from 'choerodon-ui';
class Aside extends Component{
    state = {
        collapsed: false,
    }
    
    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    render(){
        return (
            <div  style={{ width: "250px" }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type='menu' />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="assignment_ind" />
                        <span>角色管理</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
    
}
export default Aside;
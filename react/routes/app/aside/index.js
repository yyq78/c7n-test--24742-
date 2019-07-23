import React,{Component} from 'react';
import { Menu, Icon, Button } from 'choerodon-ui';
import {HashRouter,Switch,Link,Route} from 'react-router-dom';
class Aside extends Component{
    state = {
        collapsed: false,
      };
      toggleCollapsed = () => {
          console.log(this.state.collapsed);
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render(){
        return (
            <HashRouter>
                <div className="menu">
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type="dehaze" />
                    </Button>
                    <Menu inlineCollapsed={this.state.collapsed} style={{width:"250px;!important"}} mode="inline">
                        <Menu.Item key="1" >
                            <div>
                            <Icon type="assignment_ind" />
                            <span>平台设置</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <div>
                            <Icon type="frame"/>
                            <span>组织管理</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/test/role'>
                            <Icon type="record_test"/>
                            <span>角色管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <div>
                            <Icon type="agile_epic"/>
                            <span>角色标签</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <div>
                            <Icon type="agile_fault"/>
                            <span>平台分配角色</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <div>
                            <Icon type="agile_story"/>
                            <span>Root用户设置</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <div>
                            <Icon type="bar_chart"/>
                            <span>菜单配置</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <div>
                            <Icon type="unlock"/>
                            <span>组织类型</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <div>
                            <Icon type="classname"/>
                            <span>项目类型</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <div>
                            <Icon type="state_over"/>
                            <span>仪表盘设置</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <div>
                            <Icon type="assignment_ind" />
                            <span>仪表盘设置</span>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <div>
                            <Icon type="task_schedule"/>
                            <span>系统配置</span>
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
            </HashRouter>
            
        );
    }  
}
export default Aside;
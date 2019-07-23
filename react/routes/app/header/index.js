import React from 'react';
import './style/header.less';
import {axios} from '@choerodon/boot';
import { Avatar,Popover, Icon, Button} from 'choerodon-ui';
class myHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        axios.get('/iam/v1/users/self').then((response)=>{
            this.setState({data:response});
        }).catch((e)=>{
            console.log(e);
        });
    }
    render() {
        const text =(<div className="user">
                        <Avatar src="https://minio.choerodon.com.cn/iam-service/file_89927f672a40405796cc92cbd4639615_F604DA1C970E273847FF7D9FA0867D15.gif" className="user-pic"/> 
                        <div className="user-text">
                            <sapn>{this.state.data.realName}</sapn><br/>
                            <span>{this.state.data.email}</span>
                        </div>
                    </div>);
        const content = (<div class="list">
                            <div className="list-item"><Icon type="message_notification" /><span className="item-txt">消息通知</span> </div>
                            <div className="list-item"><Icon type="vpn_key" /><span className="item-txt">修改密码</span></div>
                            <div className="list-item"><Icon type="manage_person" /> <span className="item-txt">个人信息</span></div>
                            <div className="list-item"><Icon type="authority" /><span className="item-txt">权限信息</span> </div> 
                            <div className="list-item"><Icon type="token" /><span className="item-txt">授权管理</span> </div> 
                            <div className="list-item"><Icon type="settings" /><span className="item-txt">平台管理</span> </div> 
                            <div className="list-item"><Icon type="exit_to_app" /><span className="item-txt">退出登录</span> </div> 
                         </div>
                        );
        return (<div className="header">
                    <div className="header-left">
                        <Icon type="menu"/>
                        <span>Choerodon</span>
                    </div>
                    <ul className="header-center">
                        <li><Icon type="APItest"/>测试项目<Icon type="keyboard_arrow_down"/></li>
                        <li><Icon type="manage_project"/>管理</li>
                    </ul>
                    <ul className="header-right">
                        <li><Icon type="apps"/></li>
                        <li><Icon type="document"/></li>
                        <li>
                            <Icon type="notifications"/>
                        </li>
                        <li>
                            <Popover placement="bottomRight" content={content} title={text} trigger="click">
                                <Button  className="user-icon">
                                <Avatar src="https://minio.choerodon.com.cn/iam-service/file_89927f672a40405796cc92cbd4639615_F604DA1C970E273847FF7D9FA0867D15.gif" /> 
                                </Button>
                            </Popover>
                        </li>
                    </ul>   
                </div>
        );
    }
}
export default myHeader;
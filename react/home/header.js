import React from 'react';
import './style/header.css';
import { Avatar,Popover,Menu, Icon, Button } from 'choerodon-ui';
import MenuItem from 'choerodon-ui/lib/menu/MenuItem';
function Header(props){
    const text =(<div className="user">
    <Avatar src="https://minio.choerodon.com.cn/iam-service/file_89927f672a40405796cc92cbd4639615_F604DA1C970E273847FF7D9FA0867D15.gif" className="user-pic"/> 
    <div className="user-text">
        <sapn>管理员</sapn><br/>
        <span>admin@example.org</span>
    </div>
    </div>);
    const content = (
        <div className="list">
            <div className="list-item"><Icon type="vpn_key" />修改密码</div>
            <div className="list-item"><Icon type="manage_person" />个人信息</div>
            <div className="list-item"><Icon type="authority" />权限信息</div>
        </div>
    );
    return (
        <div className="header" {...props}>
             <Popover placement="bottomRight" content={content} title={text} trigger="click">
                <Button  className="user-icon">
                <Avatar src="https://minio.choerodon.com.cn/iam-service/file_89927f672a40405796cc92cbd4639615_F604DA1C970E273847FF7D9FA0867D15.gif" /> 
                </Button>
             </Popover>
           
        </div>
    );
}
export default Header;
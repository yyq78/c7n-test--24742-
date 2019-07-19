import React,{Component} from 'react';
import './style/creat.less';
import Store from './stores/index';
import {Button} from 'choerodon-ui';
import Form from './creatForm';
class Creat extends Component{
    goBack(){
        console.log(this.props.history.goBack());
    }
    render(){
        let level=Store.level;
        let MAP={
            "organization":"组织",
            "site":"全局",
            "project":"组织"
        };
        return (
        <div>
            <div className="creatHead">
                <Button shape="circle" icon="arrow_back" size="large" type="primary" className="creatBack" onClick={this.goBack.bind(this)}></Button>
                <span className="creatTitle">创建{MAP[level]}层角色</span>
            </div>
            <Form/>
        </div>
        )
    }
}
export default Creat;
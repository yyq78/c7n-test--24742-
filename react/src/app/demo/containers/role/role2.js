import React,{Component} from 'react';
import './style/creat.less';
import Store from './stores/index';
import {Button} from 'choerodon-ui';
import FormField from './form';
import { observer } from 'mobx-react';
class Creat extends Component{
    goBack(){
        console.log(this.props.history.goBack());
    }
    render(){
        let level=Store.level;
        let MAP={
            "organization":"组织",
            "site":"全局",
            "project":"项目"
        };
        return (
        <div>
            <div className="creatHead">
                <Button shape="circle" icon="arrow_back" size="large" type="primary" className="creatBack" onClick={this.goBack.bind(this)}></Button>
                <span className="creatTitle">创建{MAP[level]}层角色</span>
            </div>
            <div>
                <FormField/>
            </div>
        </div>
        )
    }
}
export default Creat;
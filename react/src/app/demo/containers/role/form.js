import React,{Component} from 'react';
import { Form,Input, Button,Select,Col,Row } from 'choerodon-ui';
import { observer } from 'mobx-react';
import Store2 from './stores/index2';
import Menu from './menu';
import './style/form.less';
const Option = Select.Option;
@observer
class FormField extends Component{
    constructor(props){
        super(props);
        this.state={
            code:"",
            name:"",
            label:"",
            options:[]
        }
    }
    componentDidMount() {
        this.loadData();
    }
    
    loadData = () => {
        Store2.loadData();
    }
    renderSelect(){
        const LabelData=Store2.LabelData.slice();
        const options=LabelData.map((item,index)=>{
            return <Option key={index}>{item.name}</Option>
        });
        return options;
    }

    render(){
        return(
            <div>
                <div style={{marginLeft:"15px"}}>
                 <Row gutter={8}>
                    <Col span={6}>
                    <Input placeholder="角色名称" required label="Basic" />
                    </Col>
                    
                    <Col span={6}>
                    <Input placeholder="项目编码" required label="Basic" />
                    </Col>
                </Row> 
                </div>
                <Row>
                    <Col span={24}>
                        <Select mode="角色标签" label="角色标签" style={{width:"30vw"}} placeholder="角色标签" value="" onChange={this.handleCurrencyChange}>
                           {this.renderSelect()}
                        </Select>
                    </Col>
                </Row> 
                <Row>
                    <Col span={24}>
                        <Menu/>
                    </Col>
                </Row>   
            </div>
            
        )
        
    }
}

export default FormField;

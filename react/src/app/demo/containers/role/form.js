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
    // validateName=(e)=>{
    //     let name=e.target.value.toString();
    //     const re = /^[A-Za-z].{2,20}$/;
    //     console.log(name);
    //     if(!re.test(name)){
    //         alert("名称必须以字母开头，只能输入字母，数字，_，-，/");
    //     }
        
       
    // }
    // validateCode=(e)=>{
    //     const re2=/^[0-9a-zA-Z\_\-\/\s]+$/;
    //     let code=e.target.value.toString();
    //     if(!re2.test(name)){
    //         alert("编码必须以字母开头，只能输入字母，数字，_，-，/");
    //     }
       
    // }
    render(){
        return(
            <div>
                <div style={{marginLeft:"15px"}}>
                 <Row gutter={8}>
                    <Col span={6}>
                    <Input  onChange={this.validateName} placeholder="角色名称" required label="Basic" />
                    </Col>
                    
                    <Col span={6}>
                    <Input  onChange={this.validateCode} placeholder="项目编码" required label="Basic" />
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

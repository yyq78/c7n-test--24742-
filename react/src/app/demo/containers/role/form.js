import React,{Component} from 'react';
import { Form,Input, Button,Select,Col,Row } from 'choerodon-ui';
import { observer } from 'mobx-react';
import Store2 from './stores/index2';
import Menu from './menu';
import './style/form.less';
const FormItem = Form.Item;
const Option = Select.Option;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
@observer
class FormField extends Component{
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        Store2.loadData();
    }
    renderSelect(){
        const LabelData=Store2.LabelData.slice();
        const options=LabelData.map((item,index)=>{
            return <Option key={index} value={item.name}>{item.name}</Option>
        });
        return options;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              values.roleName=values.roleName.trimStart();
            console.log('Received values of form: ', values);
          }
        });
    }
    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const roleNameError = getFieldError('roleName');
        const roleCodeError = getFieldError('roleCode');
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                <div>
                    <div style={{marginLeft:"15px"}}>  
                        <Row gutter={8}>
                            <Col span={6}>
                            <FormItem
                validateStatus={roleNameError ? 'error' : ''}
                help={roleNameError || ''}
                >
                {getFieldDecorator('roleName', {
                    rules: [{ 
                        required: true,
                        message: '名称不能为空!',
                    }]
                })(
                    <Input type="text" placeholder="角色名称" />
                )}
                </FormItem>
                            </Col>
                            <Col span={6}>
                            <FormItem
                            validateStatus={roleCodeError ? 'error' : ''}
                            help={roleCodeError || ''}
                            >
                            {getFieldDecorator('roleCode', {
                                rules: [{ 
                                    required: true, 
                                    message: '编码必须以字母开头，只能输入字母，数字，_，-，/',
                                    pattern:/^[0-9a-zA-Z\_\-\/]+$/}],
                            })(
                                <Input type="text" placeholder="角色编码" />
                            )}
                            </FormItem>
                            </Col>
                        </Row> 
                    </div>
                    <Row>
                        <Col span={24}>
                            <FormItem>
                                {getFieldDecorator('roleLabel',{
                                    rules:[{required:true,message:"请选择角色标签"}]
                                })(
                                    <Select mode="角色标签" label="角色标签" style={{width:"30vw"}} placeholder="角色标签" value="" onChange={this.handleCurrencyChange}>
                                    {this.renderSelect()}
                                    </Select>
                                )
                                }
                                
                            </FormItem>
                           
                        </Col>
                    </Row> 
                    <Row>
                        <Col span={24}>
                            <Menu/>
                        </Col>
                    </Row>  
                    <Row>
                        <Col span={2}>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                   创建
                                </Button>
                            </FormItem>
                            
                        </Col>
                        <Col span={2}>
                            <FormItem>
                                <Button
                                    type="primary"
                                >
                                    取消
                                </Button>
                            </FormItem>
                        </Col>
                        
                    </Row> 
                </div>
            </Form>
            </div>
        )
    }
}

export default Form.create()(FormField);

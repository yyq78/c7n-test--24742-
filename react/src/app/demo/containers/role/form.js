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
@Form.create()
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
            return <Option key={index}>{item.name}</Option>
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
        console.log("renders");
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        // Only show error after a field is touched.
        const roleNameError = isFieldTouched('roleName') && getFieldError('roleName');
        const roleCodeError = isFieldTouched('roleCode') && getFieldError('roleCode');
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
                        message: '请输入名称!',
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
                                    message: '不匹配!',
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
                    <Row>
                        <Col span={6}>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    Log in
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

export default FormField;

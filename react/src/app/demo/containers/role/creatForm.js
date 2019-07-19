import React,{Component} from 'react';
import { Form, Icon, Input, Button,Select,Table } from 'choerodon-ui';
import { observer } from 'mobx-react';
import Store from './stores/index';
import LevelData from './stores/levelData';
import { Row, Col } from 'choerodon-ui';
const FormItem = Form.Item;
const Option = Select.Option;

@observer
class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // 加载level的labels
    this.props.form.validateFields();
    LevelData.loadData(Store.level);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  renderTable(){
    const columns = [{
        title: '菜单',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '页面入口',
        dataIndex: 'route',
        key: 'route',
      },
      {
          title:"  ",
          dataIndex:"action",
          key:"action"
      }
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
    };
    const {subMenus}=LevelData.menuData;
    const data=subMenus;
    
    console.log(data);
    return (<Table columns={columns} rowSelection={rowSelection} dataSource={data} style={{"width":"75vw"}}/>);
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    //将label放入选择框的数组
    const labels=[];
    const allLevelLabel=LevelData.LabelData.slice();
    allLevelLabel.forEach((item,index)=>{
        let {name}=item;
        labels.push(<Option key={index}>{name}</Option>);
    })
    // Only show error after a field is touched.
    const codeError = isFieldTouched('code') && getFieldError('code');
    const nameError = isFieldTouched('name') && getFieldError('name');
    return (
        <div style={{marginLeft:"20px"}}>
  
            <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem
                validateStatus={codeError ? 'error' : ''}
                help={codeError || ''}
            >
                {getFieldDecorator('code', {
                rules: [{ required: true, message: '请输入角色编码!' }],
                })(
                <Input prefix={<span>role/{Store.level}/common/</span>} placeholder="角色编码" />
                )}
            </FormItem>
            <FormItem
                validateStatus={nameError ? 'error' : ''}
                help={nameError || ''}
            >
                {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入角色名称!' }],
                })(
                <Input  type="text" placeholder="角色名称" />
                )}
            </FormItem><br/>
            <FormItem>
            <Select
                mode="角色标签"
                label="角色标签"
                style={{width:"30vw"}}
                placeholder="角色标签"
            >
                {labels}
            </Select>
            </FormItem><br/>
            <FormItem >
                <div style={{"lineHeight":"58px;",fontSize:"18px"}}>菜单管理</div>
        
                {this.renderTable()}
            </FormItem><br/>
            <FormItem>
                <Button
                type="primary"
                htmlType="submit"
                >
                创建
                </Button>
                <Button
                type="flat"
                >
                取消
                </Button>
            </FormItem>
            </Form>
    
   </div>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export default WrappedHorizontalLoginForm;
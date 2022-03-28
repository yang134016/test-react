import React, { useState, useEffect } from 'react'
import { Form, Input, TreeSelect ,  Radio, message,Modal,Select } from 'antd'
import { peojectIcon, iconType } from './config'
import BIcon from '../../common/components/bicon'
import { useQuery } from '../../utils/index'
import { getAuthButtonList, editeProject } from '../../utils/api'
import{DataType} from './rule'

import './index.scss'
import { Bundle } from 'typescript'

function AddTag (props: any) {
  const [form] = Form.useForm();
  // const [state, setstate] = useState<any>({ ...props.project })
  useEffect(() => {
    const data = getAuthButtonList()
    if(props.Data.type === "add"){
      form.resetFields();
    }else{
      form.setFieldsValue(props.Data?.data||{})
    }
    
  })
  const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

  const tProps:DataType = {
    treeData,
    value: ['0-0-0'],
    onChange: inputChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };

  async function edit (values: any, id:string) {
    const { data } = await editeProject(id, values)
    if (data.code) {
      message.success(data.message)
      props.history.push('/project')
    }
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }
  
  function inputChange(key: string, e: any) {
    
    // const obj = Object.assign(state, {[key]: e.target.value})
    // // setstate({...obj})
  }
  const handleOk = (e:any) => {
    form.validateFields().then(vals=>{
      props.Callback("ok",vals)
      
  });
 };
 
  const handleCancel = () => {
    props.Callback();
 };
  return (
    <Modal title={props.title} visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
    <Form form={form} layout='horizontal' {...formItemLayout}>
      <Form.Item label="产品名称" name='productName' rules={[{ required: true, message: '请输入产品名称!' }]}>
        <Input placeholder="请输入产品名称" onChange={e => inputChange('title', e)} />
      </Form.Item>
      <Form.Item label="产品描述" name='describe' rules={[{ required: true, message: '请填写产品描述!' }]}>
        <Input placeholder="请填写产品描述" onChange={e => inputChange('descript', e)} />
      </Form.Item>
      <Form.Item label="浏览地址" name='address' rules={[{ required: true, message: '请填写产品浏览地址!' }]}>
        <Input placeholder="请填写产品浏览地址" onChange={e => inputChange('view', e)} />
      </Form.Item>
      <Form.Item label="github地址" name='gitaddress' rules={[{ required: true, message: '请填写产品github地址!' }]}>
        <Input placeholder="请填写产品github地址" onChange={e => inputChange('github', e)} />
      </Form.Item>
      <Form.Item name='productLineId' label="所属产品线" rules={[{ required: true , message:'必须选择' }]}>
        <Select>
          {props.Data?.list?.map((item:any,index:any)=><Select.Option key={item?.value} value={item?.value}>{item?.label}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item name='treeData' label="树形选项" rules={[{ required: true , message:'必须选择' }]}>
         <TreeSelect {...tProps} />
      </Form.Item>
      <Form.Item label="产品图标" rules={[{ required: true, message: '请填icon!' }]}>
        <Radio.Group value={props.icon} onChange={e => inputChange('icon', e)} >
          {
            peojectIcon.map((icon:iconType) => (
              <Radio.Button
                value={icon.class}
                key={icon.class}>
                <BIcon type={icon.class}></BIcon>
              </Radio.Button>
            ))
          }
        </Radio.Group>
      </Form.Item>
    </Form>
    </Modal>
  )
}

export default AddTag


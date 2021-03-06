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
    // const data = getAuthButtonList()
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
      <Form.Item label="????????????" name='productName' rules={[{ required: true, message: '?????????????????????!' }]}>
        <Input placeholder="?????????????????????" onChange={e => inputChange('title', e)} />
      </Form.Item>
      <Form.Item label="????????????" name='describe' rules={[{ required: true, message: '?????????????????????!' }]}>
        <Input placeholder="?????????????????????" onChange={e => inputChange('descript', e)} />
      </Form.Item>
      <Form.Item label="????????????" name='address' rules={[{ required: true, message: '???????????????????????????!' }]}>
        <Input placeholder="???????????????????????????" onChange={e => inputChange('view', e)} />
      </Form.Item>
      <Form.Item label="github??????" name='gitaddress' rules={[{ required: true, message: '???????????????github??????!' }]}>
        <Input placeholder="???????????????github??????" onChange={e => inputChange('github', e)} />
      </Form.Item>
      <Form.Item name='productLineId' label="???????????????" rules={[{ required: true , message:'????????????' }]}>
        <Select>
          {props.Data?.list?.map((item:any,index:any)=><Select.Option key={item?.value} value={item?.value}>{item?.label}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item name='treeData' label="????????????" rules={[{ required: true , message:'????????????' }]}>
         <TreeSelect {...tProps} />
      </Form.Item>
      <Form.Item label="????????????" rules={[{ required: true, message: '??????icon!' }]}>
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


import {Button,message ,Modal,Dropdown,Menu,Input} from 'antd';
import { useState } from 'react';
import PageHeaders from "../pageheader";
import AddTag from "../project-add/add";
import DrawerForm from "../projects/drawer";
import PageTables from '../pageTable';
import {columns,tableData,typeList} from '../pageTable/config';
import{productEditData} from '../project-add/rule'
import "./index.scss"
import path from 'path';
const { confirm } = Modal;
const { Search } = Input


const Home = (props:any) => {
  // const onFinish = (val:number) => {
  //   console.log('Success:');
  // };
  const add=()=>{
    setTableColumns({
      type:"add",
      list:typeList
    })
    setIsModalVisible(true)
  }
  const Callback=(type?: string,val?: any)=>{
    if(type === 'ok'){
      message.success('保存成功！');
      setIsModalVisible(false)
    }else{
      setIsModalVisible(false)
    }
    
  }
  const[isModalVisible,setIsModalVisible] = useState<boolean>(false)
  const[tableColumns,setTableColumns] = useState<productEditData>({
    data:{},
    type:"add",
    list:[]
  })
  const [visible,setVisible] = useState<boolean>(false);
    // 操作
  const Operation =(text: string, data: object) =>{
    

     const handleMenuClick= (e: any) =>{
          if(e.key=== 'edit'){
            setTableColumns({
              data:data,
              type:"edit",
              list:typeList
            })
            setIsModalVisible(true)
          }else if(e.key === 'jump'){
            props.history.push({pathname:'/project',params:2})
          }else if(e.key === 'drawer'){
            setVisible(!visible);
          }else{
              confirm({
                  title: '提示',
                  content: '是否确认删除该产品数据',
                  okText: '确定',
                  cancelText:'取消',
                onOk() {
   
                     message.success('删除成功！');
                  },
                  onCancel() {
                      console.log('Cancel');
                  },
              });
          }
      };
      return (
        
          <Dropdown
              overlay={
                  <Menu onClick={handleMenuClick}>
                    <Menu.Item key="jump">跳转</Menu.Item>
                    <Menu.Item key="drawer">抽屉</Menu.Item>
                      <Menu.Item key="edit">修改</Menu.Item>
                      <Menu.Item key="del">删除</Menu.Item>
                  </Menu>
              }
              trigger={['click']}
              // onVisibleChange={()=>setVisible(!visible)}

              
          >
            <Button size='small'>操作</Button>
            
          </Dropdown>
      );
  };
  // 搜索
  const PageSearchs = ()=>{
    const onSearch =(e:any)=>{
      
    }
    return(
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    )
    
  }
  return (
    <>
    <div className='viewdata'>
      <PageHeaders title="产品" subTitle="产品二级" extra={[
        <Button onClick={add}>新增产品</Button>,
      ]}/>
      <PageSearchs/>
      <AddTag 
        title="产品新增"
        visible={isModalVisible}
        Callback={Callback}
        Data={tableColumns}
      />
      <DrawerForm visible={visible}/>
      <PageTables columns={columns(Operation)} dataSource={tableData} pagination={{ current:1,size:10,total:100 }}/>
      {/* <Operation/> */}
    </div>
       </>
  );
}; 



export default Home

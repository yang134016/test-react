import React, { useState, useEffect, useContext, useReducer } from 'react'
import { Table, message,Space } from 'antd'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { fetchProject, delProject } from '../../utils/api'
import { Operate } from './oprations'
import {Button1,Button2} from "../../common/components/Button"
import Upload from '../upload'
import './index.scss'
const Context = React.createContext()
function EditCell (props: any) {
  const { children, col} = props
  return <td>{col && col.dataIndex === 'operation' ? <Operate {...props} /> : children}</td>
}

const initState = {count:1}

export const reducer = (state:any,action:any)=>{
    switch(action.type){
        case "increment":
            return {...state,count:state.count + 1}
        case"decrement":
            return {...state,count:state.count - 1}
        return state
    }
}
//子组件
function App() {
  const state:any = useContext(Context)
  return (
      <div>
          <h2>子组件</h2>
          <p>count:{state.count}</p>
          <hr />
      </div>
  )
}

const Projects = (props:any) => {
  const [tableData, setTableData] = useState<Array<object>>([]) 
  const [refresh, setRefresh] = useState(2)
  const [page, setPage] = useState({ current: 1, total: 0 })
  const [state,dispatch] = useReducer(reducer,initState)
  
  useEffect(() => {
   

  }, [])

  function ButtonCallback(val:any){
    dispatch({type:val})
  }

  function edit (id:string) {
    props.history.push(`/project-add?id=${id}`)
  }
  async function del (id:string) {
    const {data} = await delProject(id)
    setRefresh(refresh+1)
    setPage({ current: 1, total: 0 })
    message.success(data.message)
  }

  const tableColumns = columns.map(col => {
    if (col.dataIndex === 'operation') {
      return { ...col, onCell: (record:any, rowIndex: number) => ({col, record, edit, del, rowIndex }) }
    } else {
      return col
    }
  })
  const components = { body: { cell: EditCell } }
  return <PageLayout title='项目管理'>
    <Upload name='测试文件'/>
    <Space>
      useReducer:{state.count}
      <Button1 Callback={ButtonCallback}/>
      <Button2 Callback={ButtonCallback}/>
    </Space>

    {/* Context跨组件传值 */}
    <Context.Provider value={state}>
      <App/>
    </Context.Provider>
    
    <Table components={components}
      columns={tableColumns as any}
      dataSource={tableData}
      bordered
      size='middle'
      rowKey='_id'
      pagination={page} />
  </PageLayout>
}

export default Projects

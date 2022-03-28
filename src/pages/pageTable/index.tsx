import {Table} from 'antd'
import "./index.scss"
const pageTables = (props:any)=>{
    const clientHeight = window.innerHeight - 200
    return(
        <div className='box'>
            <Table columns={props.columns} 
                dataSource={props.dataSource} 
                size="small"
                rowSelection={{type:"checkbox"}}
                bordered
                // scroll={{x:1200,y:clientHeight}}
                pagination={ {
                    current:props.pagination?.current,
                    total:props.pagination?.total,
                    onChange:props.pagination?.onChange,
                    pageSize:props.pagination?.pageSize
                }|| false}
            />

        </div>
    )
}
export default pageTables
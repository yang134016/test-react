import {Upload, message, Button} from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import './index.scss'

const upload = (props:any)=>{
    const obj={
        name:props.name,
        showUploadList:false,
        onChange(e:any){
            if (e.file.status == 'uploading') {
                message.success('上传成功！')
              }
        }
    }
    

    return(
        <>
        <Upload {...obj}>
            <Button className="upload" icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        </>
    )
}

export default upload
import { PageHeader } from "antd";

import './index.scss';

const PageHeaders = (props: any)=>{
    return(
       <PageHeader
       className="PageHeaders"
            title={props.title}
            subTitle={props.subTitle}
            extra={props.extra}
       /> 
    )
    
}

export default PageHeaders;

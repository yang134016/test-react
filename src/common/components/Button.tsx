import { Button } from 'antd'
export const Button1 = (props:any)=>{
    function Click(){
        props.Callback("increment")
    }
    return(
        <>
        <Button type="primary" onClick={Click}>Button1</Button>
        </>
    )
}
export const Button2 = (props:any)=>{
    function Click(){
        props.Callback("decrement")
    }
    return(
        <>
        <Button type="primary" onClick={Click}>Button2</Button>
        </>
    )
}
// export const Button3 = ()=>{
//     return(
//         <>
//         <Button type="primary">Button3</Button>
//         </>
//     )
// }


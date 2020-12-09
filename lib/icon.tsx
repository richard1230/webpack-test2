import React from "react";
import  "./icons/wechat.svg"
import  "./icons/alipay.svg"
import  "./icons/qq.svg"





interface IconProps {
    name: string
}

//如何申明一个函数组件接受的props类型
//<>：表示FunctionComponent接受一个参数,其源代码里面指明了此参数为p(这里为name),不传的话即为空对象
// interface FunctionComponent<P = {}>
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span>
            <svg>
                <use xlinkHref="#wechat"></use>
            </svg>
            <svg>
                <use xlinkHref="#alipay"></use>
            </svg>
            <svg>
                <use xlinkHref="#qq"></use>
            </svg>
        </span>
    )
}

export default Icon
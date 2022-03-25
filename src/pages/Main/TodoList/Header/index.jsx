import React from "react";
import './style.css'
import {nanoid} from 'nanoid'
export default  function Header (props){

    function keyUphandle(event){
        const { keyCode, target } = event
        if (keyCode!==13) return
        if (target.value.trim() === ''){
            alert('输入的内容不能为空')
            return
        }
        props.addTodo([{id:nanoid(), name:target.value, done:false}])
        target.value = ''
    }

    return(
        <div className='todo-header'>
            <input onKeyUp={keyUphandle} type='text' placeholder='请输入代办项名称，按回车确认' />
        </div>
    )
}
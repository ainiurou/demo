import React from 'react'
import './style.css'

export  default  function Footer (props){

    return(
        <div className='todo-footer'>
            <label>
                <input type='checkbox' />
            </label>
            <span>
                <span>已完成0</span> / 全部2
            </span>
            <button className='btn btn-danger'>清除已完成任务</button>
        </div>
    )
}
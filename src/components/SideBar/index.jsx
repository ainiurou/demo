import React from 'react'
import './style.css'
import HeaderNav from '../HeaderNav'
import Content from '../Content'
import { useSelector } from 'react-redux'

export default function SideBar() {

  const toggle = useSelector(state => state.sidebar)

  function toggleTable(event){
    const span = event.target
    if(span.className==="open"){
      
      span.className="closed";
      span.nextElementSibling.className="hide";
    }else
    {
      var open=document.querySelector("[class=tree] span[class=open]");
      if(open!=null){
    
        open.className="closed";
        open.nextElementSibling.className="hide";
      }
      span.className="open";
      span.nextElementSibling.className="show";
    }
  }
  
  return (
    <div className= {toggle.status ? 'sidebar-toggle' : 'sidebar-close'}>
      <HeaderNav />
      <Content />
      <div id="manager">
        <ul className="tree">
            <li className="pro">
                <span className="open" onMouseEnter={toggleTable} onMouseLeave={toggleTable}>XX管理</span>
                <ul className="hide">
                    <li>日常考勤</li>
                    <li>请假申请</li>
                    <li>加班/出差</li>
                </ul>
            </li>
            <li className="pro">
                <span className="closed"  onMouseEnter={toggleTable} onMouseLeave={toggleTable}>XX中心</span>
                <ul className="hide">
                    <li>通知公告</li>
                    <li>公司新闻</li>
                    <li>规章制度</li>
                </ul>
            </li>
            
        </ul>
    </div>
      
    </div>
  )
}

import React from 'react'
import './contentList.css'

const ContentList = (props) => {
  const{ itemList, highlightedElement, selectedElement} = props
  const hIndex = itemList.indexOf(highlightedElement)
  const sIndex = itemList.indexOf(selectedElement)
  return (
    <div>
      <ul>
        {itemList.map((item,index)=>{
          if(hIndex===index){
            return <li key={index}><div className="highlight" >{item}</div></li>
          }else if(sIndex===index){
            return <li key={index}><div className="select">{item}</div></li>
          }else{
            return <li key={index}><div>{item}</div></li>
          }
          
        })}
      </ul>
      
    </div>
  )
}

export default ContentList

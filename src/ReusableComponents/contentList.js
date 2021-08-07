import React from 'react'
import './contentList.css'

const ContentList = (props) => {
  const{ itemList, highlightedElement, selectedElement} = props
  const hIndex = itemList.indexOf(highlightedElement)
  // const sIndex = itemList.indexOf(selectedElement)
  return (
    <div className="horizontal-flex">
      <div className="content-container">
        {itemList.map((item,index)=>{
          if(hIndex===index){
            return <div className="item highlight center" key={index}><div>{item}</div></div>
          }else{
            return <div key={index} className="item center"><div>{item}</div></div>
          } 
        })}
      </div>
        
        <div>
          <img style={{width:'100%', height: '100%'}}src="data:image/jpeg;base64,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"/>
        </div>
      
    </div>
  )
}

export default ContentList

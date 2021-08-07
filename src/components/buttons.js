import React from 'react'
import './buttons.css'
const Buttons = (props) => {
  
  const {changeSelectedElement, changeHighlightedElement , highlightedElement, selectedElement} = props
  
  const addEventListeners=()=>{
    // const target = document.querySelector('.white')
    // console.log('target is ',target);
    // target.addEventListener('mousedown',(e)=>{
    //   console.log('mousedown event on ',e.currentTarget);
    //   // e.currentTarget.addEventListener('onmouseover',(event)=>{
    //   //   console.log('onmouseover event on ',event.target);
    //   //   changeHighlightedElement()
    //   // })

    // })
    // target.addEventListener('onmouseup',(e)=>{
    //   console.log('onmouseup event on ', e.currentTarget);
    //  // e.currentTarget.removeEventListener('onmouseover',()=>{})
    // })
  }

  const handleMenuClick=()=>{
    if(selectedElement){
      changeSelectedElement(null)
    }
  }

  return (
    <div>
      {/* <div class="circleBase type1" onClick={()=>changeSelectedElement(highlightedElement)}></div> */}
      <div className="white" onClick={()=>{changeHighlightedElement(); console.log('changeHighlighted element');}}>
        <button className="btn button-top" onClick={handleMenuClick}>menu</button>
        <button className="btn button-right"><i className="fas fa-step-forward"></i></button>
        <button className="btn button-bottom"><i className="fas fa-pause"></i></button>
        <button className="btn button-left"><i className="fas fa-step-backward"></i></button>
        <div className="gray" onClick={(e)=>{
          if(selectedElement){
            return
          }
          changeSelectedElement(highlightedElement)
          e.preventDefault()
        }}></div>
      </div>
      {/* {addEventListeners()} */}
      {/* <button onClick={()=>changeHighlightedElement(highlightedElement)}>changeSelectedElement</button> */}
    </div>
  )
}

export default Buttons

import React from 'react'
import './buttons.css'
const Buttons = (props) => {
  
  const {changeSelectedElement, changeHighlightedElement , highlightedElement, selectedElement} = props
  return (
    <div>
      <div class="circleBase type1" onClick={()=>changeSelectedElement(highlightedElement)}></div>
      {/* <button onClick={()=>changeHighlightedElement(highlightedElement)}>changeSelectedElement</button> */}
    </div>
  )
}

export default Buttons

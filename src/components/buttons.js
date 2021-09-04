import React, { useEffect } from 'react'
import './buttons.css'
import ZingTouch from 'zingtouch'
const Buttons = (props) => {
  const {
    changeSelectedElement,
    changeHighlightedElement,
    highlightedElement,
    selectedElement,
  } = props

  useEffect(() => {
    var myElement = document.getElementById('white')
    var zt = new ZingTouch.Region(myElement)
    var rotate = new ZingTouch.Rotate()
    zt.bind(
      myElement,
      rotate,
      function (e) {
        changeHighlightedElement()
        console.log('rotation detail', e.detail)
      },
      false
    )
  }, [])

  const handleMenuClick = () => {
    if (selectedElement) {
      changeSelectedElement(null)
    }
  }

  return (
    <div>
      <div className="white" id="white">
        <button className="btn button-top" onClick={handleMenuClick}>
          menu
        </button>
        <button className="btn button-right">
          <i className="fas fa-step-forward"></i>
        </button>
        <button className="btn button-bottom">
          <i className="fas fa-pause"></i>
        </button>
        <button className="btn button-left">
          <i className="fas fa-step-backward"></i>
        </button>
        <div
          className="gray"
          onClick={(e) => {
            if (selectedElement) {
              e.stopPropagation()
              return
            }
            changeSelectedElement(highlightedElement)
            e.preventDefault()
            e.stopPropagation()
          }}
        ></div>
      </div>
    </div>
  )
}

export default Buttons

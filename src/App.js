import './App.css';
 import Screen from './components/screen'
 import Buttons from './components/buttons'
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      highlightedElement:"settings",
      selectedElement:null,
      elements:['settings', 'music', 'games']
    } 
  }

  changeSelectedElement=(newElement)=>{
    console.log('changeSelected element');
    this.setState({
      selectedElement: newElement,
      // highlightedElement: null
    })
  }

  changeHighlightedElement=()=>{
    this.setState((prevState)=>{
      const{ elements, highlightedElement} = prevState
      let length = elements.length
      let idx = elements.indexOf(highlightedElement)
      if(idx === length-1){
        return {highlightedElement: elements[0]}  
      }
      return {highlightedElement: elements[idx+1]}
    },()=>console.log(this.state))
  }

  render() {
    const { highlightedElement, selectedElement } = this.state
    return (
      <div className="App">
        <div style={styles.ipod}>
          <div className="childContainer">
            <Screen 
              highlightedElement={highlightedElement}
              selectedElement={selectedElement}
            />
          </div>
          <div className="childContainer center buttonContainer">
            <Buttons 
            changeSelectedElement={this.changeSelectedElement}
            changeHighlightedElement={this.changeHighlightedElement}
            highlightedElement={highlightedElement}
            selectedElement={selectedElement}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles={
  ipod:{
    height: '75%',
    width: '40%',
    backgroundColor: 'gray',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  }
}



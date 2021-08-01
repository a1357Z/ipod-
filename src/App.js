import './App.css';
 import Screen from './components/screen'
 import Buttons from './components/buttons'
import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      highlightedElement:"music",
      selectedElement:'settings'
    } 
  }

  changeSelectedElement=(newElement)=>{
    this.setState({
      selectedElement: newElement
    })
  }

  changeHighlightedElement=(newElement)=>{
    this.setState({
      highlightedElement: newElement
    })
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
          <div className="childContainer">
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



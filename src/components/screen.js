import React, { Component } from 'react'
import ContentList from '../ReusableComponents/contentList'
import Games from './Games'
import Music from './Music'
import Settings from './Settings'

export default class Screen extends Component {

  constructor(props){
    super(props)
    this.state={
      itemList:['settings','music', 'games']
    }
  }
  
  showSelectedElement=()=>{
    const { selectedElement } = this.props
    if(selectedElement === 'settings'){
      return <Settings />
    }else if(selectedElement === 'music'){
      return <Music />
    }else{
      return <Games />
    }
  }

  render() {
    const{ highlightedElement, selectedElement } = this.props
    const {itemList} = this.state
    return (
      <>
        { selectedElement && this.showSelectedElement()}
        { !selectedElement && <ContentList 
            itemList={itemList}
            highlightedElement={highlightedElement}
            selectedElement={selectedElement}
          /> 
        }
        

      </>
    )
  }
}

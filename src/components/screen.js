import React, { Component } from 'react'
import ContentList from '../ReusableComponents/contentList'

export default class Screen extends Component {

  constructor(props){
    super(props)
    this.state={
      itemList:['settings','music', 'games']
    }
  }

  render() {
    const{ highlightedElement, selectedElement } = this.props
    const {itemList} = this.state
    return (
      <div>
        <ContentList 
          itemList={itemList}
          highlightedElement={highlightedElement}
          selectedElement={selectedElement}
        />
      </div>
    )
  }
}

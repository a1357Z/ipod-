import React, { Component } from 'react'
import ContentList from '../ReusableComponents/contentList'

export default class Music extends Component {
  render() {
    return (
      <div
        style={{
          height: '90%',
          width: '90%',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          margin: 'inherit',
        }}
      >
        <img
          style={{ height: '100%', width: 'auto' }}
          src="https://image.flaticon.com/icons/png/512/876/876817.png"
          alt="games"
        />
      </div>
    )
  }
}

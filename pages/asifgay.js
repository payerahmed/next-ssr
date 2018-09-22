import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

export default class componentName extends Component {
  static async getInitialProps (obj) {
    console.log('haha', obj.pathname)
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await res.json()
    return { data }
  }
  render () {
    return <div />
  }
}

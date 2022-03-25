import React, { Component, createRef } from 'react'
import { AtDrawer, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { get as getGlobalData } from '../../utils/global_data'
import NavigationBar from '../../components/navigationBar/index'
import './index.scss'

import Login from '../../components/login/index'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  el = createRef()

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onReady () {
    // onReady 触发后才能获取小程序渲染层的节点
    Taro.createSelectorQuery().select('#only')
      .boundingClientRect()
      .exec(res => console.log(res))
  }

  onLoad() {
    console.log('load')
  }

  showMenu() {
    this.setState({
      show: true
    })
  }

  render () {
    return (
      <View id="only" ref={this.el} className='index'>
        <NavigationBar title="首页"></NavigationBar>
        <Login/>
        <AtDrawer
          show={this.state.show}
          mask
        >
          <View className='drawer-item'>个人中心 <AtIcon className='drawer-item-icon' value='user' size='20' /></View>
        </AtDrawer>
      </View>
    )
  }
}

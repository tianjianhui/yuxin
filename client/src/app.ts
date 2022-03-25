import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { set as setGlobalData } from './utils/global_data'

import './app.scss'

class App extends Component {

  // 可以使用所有的 React 生命周期方法
  componentDidMount () {}

  // 对应 onLaunch
  onLaunch () {
    const menuButtonObject = Taro.getMenuButtonBoundingClientRect();
    Taro.getSystemInfoAsync({
      success: res => {
        const statusBarHeight = res.statusBarHeight || 0
        let navTop = menuButtonObject.top; //胶囊按钮与顶部的距离
        const navHeight = statusBarHeight + menuButtonObject.height + (navTop - statusBarHeight)*2;//导航高度
        setGlobalData('statusBarHeight', statusBarHeight);
        setGlobalData('navHeight', navHeight);
      },
      fail(err) {
        console.log(err);
      }
    })
  }

  // 对应 onShow
  componentDidShow () {}

  // 对应 onHide
  componentDidHide () {}

  render () {
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    return this.props.children
  }
}

export default App


import { Component } from 'react'
import Taro from '@tarojs/taro'
import './custom-theme.scss'
import './app.scss'

class App extends Component {

  componentDidMount () {
    Taro.loadFontFace({
      global: true,
      family: 'Poppins',
      source:
        'url(https://lynn-chen.github.io/auditor-fonts/Poppins-Regular.ttf)',
    });
    Taro.loadFontFace({
      global: true,
      family: 'Poppins-Semi',
      source:
        'url(https://lynn-chen.github.io/auditor-fonts/Poppins-SemiBold.ttf)',
    });
    Taro.loadFontFace({
      global: true,
      family: 'Poppins-Bold',
      source:
        'url(https://lynn-chen.github.io/auditor-fonts/Poppins-Bold.ttf)',
    });
    Taro.loadFontFace({
      global: true,
      family: 'HarmonyOS',
      source:
        'url(https://lynn-chen.github.io/auditor-fonts/HarmonyOS_Sans_SC_Regular.ttf)',
    });
    Taro.loadFontFace({
      global: true,
      family: 'HarmonyOS-Bold',
      source:
        'url(https://lynn-chen.github.io/auditor-fonts/HarmonyOS_Sans_SC_Bold.ttf)',
    });
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App

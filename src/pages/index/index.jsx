import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import BottomTabs from '../../components/BottomTabs/BottomTabs'

import './index.scss'
// import "taro-ui/dist/style/components/button.scss" // 按需引入

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I Taro UI</AtButton>
        <Text className='text-test'>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
        {/* <BottomTabs/> */}
      </View>
    )
  }
}

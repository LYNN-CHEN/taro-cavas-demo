import React from 'react'
import { AtTabBar } from 'taro-ui'

import "taro-ui/dist/style/components/tab-bar.scss"
import "taro-ui/dist/style/components/icon.scss";

export default function BottomTabs () {
  return (
    <AtTabBar
      tabList={[
        { title: '选课', image: '../../assets/HomeSelected.png', },
        { title: '广场', iconType: 'message' },
        { title: '课篮子', iconType: 'shopping-cart' }
      ]}
      fixed
    />
  )
}
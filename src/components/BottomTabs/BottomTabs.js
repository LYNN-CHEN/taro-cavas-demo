import React, { useState } from 'react'
import { AtTabBar } from 'taro-ui'

// import "taro-ui/dist/style/components/tab-bar.scss"
// import "taro-ui/dist/style/components/icon.scss";

export default function BottomTabs () {
  const [ current, setCurrent ] = useState(0)
  const handleClick = () => {
    setCurrent(value)
  }
  return (
    <AtTabBar
      tabList={[
        { title: '选课', image: '../../assets/HomeSelected.png', },
        { title: '广场', iconType: 'message' },
        // { title: '课篮子', image: '../../assets/Shopping.png' }
      ]}
      fixed
      onClick={ handleClick }
      current={ current }
    />
  )
}
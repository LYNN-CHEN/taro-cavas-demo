import React, { useEffect, useState } from 'react'
import { View, Text, Canvas, WebView } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import './testCanvas.css'
import { AtButton } from 'taro-ui'

export default function TestCanvas() {
  const [ tempFilePath, setTempFilePath ] = useState(null)

  useEffect(() => {
    drawContent()
  }, [])

  const drawContent = () => {
    const ctx = Taro.createCanvasContext('myCanvas');
    drawText(ctx, 20, 'test1测试1', '#000', 25, 25)
    drawText(ctx, 35, 'test2测试2', '#ccc', 100, 100)
    ctx.draw();
    setTimeout(() => { Taro.canvasToTempFilePath({
      canvasId: 'myCanvas',
      // canvas: this.canvas,
      success(res) {
        console.log('path', res.tempFilePath)
        setTempFilePath(res.tempFilePath)
      },
      fail(err) {
        console.log('error', err)
        Taro.showToast('图片生成失败！')
      }
    })})
    
    // ctx.save();
    console.log('testtt')
  }

  const drawText = (ctx, size, text, color, x, y) => {
    // ctx.font = size
    ctx.setFontSize(size)
    console.log(size)
    ctx.setFillStyle(color)
    ctx.fillText(text, x, y)
    ctx.stroke();
    ctx.closePath();
  }

  const onClickSaveImage = () => {
    Taro.getSetting({
      success(res) {
        console.log('ask for auth')
        // 如果没有授权过，则要获取授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          Taro.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              savePictureSystem()
            },
            fail() { // 用户拒绝
              Taro.showModal({
                title: '授权',
                content: '您拒绝了授权请求，是否要手动开启？',
                success: function (res) {
                  if (res.confirm) {
                    Taro.openSetting({
                      success: function (res) {
                        console.log('auth', res.authSetting)
                        res.authSetting = {
                          "scope.userInfo": true,
                          "scope.userLocation": true
                        }
                      }
                    })
                  } else if (res.cancel) {
                    Taro.showToast({
                      title: '保存失败！',
                      icon: 'error',
                      duration: 2000
                    })
                  }
                }
              })
            }
          })
        } else { // 如果已经授权过，可以直接保存
          savePictureSystem()
          console.log('already have auth')
        }
      }
    })
  }

  const savePictureSystem = () => {
    Taro.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success(res) {
        Taro.showToast({
          title: '保存成功!'
        })
      },
      fail() {
        Taro.showToast({
          title: '保存失败!',
          icon: 'error',
          duration: 2000
        })
      }
    })
  }

  return (
    <View className="share-user-container">
      <Canvas type="33" style={{ width: '400px', height: '550px' }} class="myCanvas" canvasId="myCanvas"></Canvas>
      <AtButton type='primary' onClick={onClickSaveImage}>保存图片</AtButton>
    </View>
  );
}
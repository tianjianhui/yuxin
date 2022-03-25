import React, { useEffect, useState } from 'react'
import { AtCard, AtButton, AtAccordion, AtIcon, AtBadge, AtCountdown, AtTimeline } from "taro-ui"
import Taro, { useDidShow, useDidHide, useReady, usePullDownRefresh, useShareAppMessage, useTabItemTap, useRouter} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './test.scss'

function Test() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    
  })

  useDidShow(() => {
    console.log('show')
    console.log('router', router)
  })

  useDidHide(() => {})

  usePullDownRefresh(() => {
    console.log('refresh')
  })

  useShareAppMessage((params) => {
    console.log('params', params)
  })

  useTabItemTap(object => {
    console.log('object', object)
  })

  const handleClick = () => {
    setOpen(!open)
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <View className='test'>
      <AtCard
        extra='2022-03-14'
        title='基础组件'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        <AtAccordion
          open={open}
          onClick={() => handleClick()}
          title='按钮'
        >
          <AtButton>按钮文案</AtButton>
          <AtButton type='primary'>primary</AtButton>
          <AtButton type='secondary'>secondary</AtButton>
          <AtButton type='primary' size='small'>小按钮</AtButton>
          <AtButton type='primary' circle>圆角按钮</AtButton>
        </AtAccordion>
        <AtAccordion
          open={!open}
          onClick={() => handleClick()}
          title='Icon图标'
        >
          <AtIcon size='30' color='#F00' value="analytics"></AtIcon>
          <AtIcon size='30' color='#F00' value="bell"></AtIcon>
          <AtIcon size='30' color='#F00' value="eye"></AtIcon>
        </AtAccordion>
      </AtCard>

      <AtCard
        extra='2022-03-14'
        title='视图组件'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      >
        <AtAccordion
          open={show}
          onClick={() => handleShow()}
          title='Badge 徽标'
        >
          <AtBadge value={10} maxValue={99}>
              <AtButton size='small'>按钮</AtButton>
          </AtBadge>
          <AtBadge dot>
              <AtButton size='small'>按钮</AtButton>
          </AtBadge>
          <AtBadge value='NEW'>
              <AtButton size='small'>按钮</AtButton>
          </AtBadge>
          <AtBadge value={'···'}>
              <AtButton size='small'>按钮</AtButton>
          </AtBadge>
        </AtAccordion>
        <AtAccordion
          open={!show}
          onClick={() => handleShow()}
          title='Countdown 倒计时'
        >
          <AtCountdown
            isCard
            minutes={1}
            seconds={10}
          />
        </AtAccordion>
        <AtAccordion
          open={show}
          onClick={() => handleShow()}
          title='时间轴'
        >
          <AtTimeline 
            items={[
              { title: '刷牙洗脸' }, 
              { title: '吃早餐', color: 'green' }, 
              { title: '上班', color: 'red' }, 
              { title: '睡觉', color: 'yellow' }
            ]}
          >
          </AtTimeline>
          <AtTimeline 
            items={[
              { title: '刷牙洗脸', icon: 'check-circle' }, 
              { title: '吃早餐', icon: 'clock' }, 
              { title: '上班', icon: 'clock' }, 
              { title: '睡觉', icon: 'clock' }
            ]}
          >
          </AtTimeline>
        </AtAccordion>
      </AtCard>
    </View>
  )
}
export default Test

import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components'
import { get as getGlobalData } from '../../utils/global_data'
import { AtIcon } from "taro-ui"

interface Icon {
  size?: string | number;
  value?: string;
  color?: string;
}

interface Props {
  title: string;
  icon?: Icon;
  leftTitle?: string;
}

function NavigationBar({ title, icon = { size: '30', color: 'yellow'}, leftTitle}: Props) {
  const [nav, setNav] = useState({
    navHeight: 0,
    statusBarHeight: 0
  });
  useEffect(() => {
    const statusBarHeight: number = getGlobalData('statusBarHeight');
    const navHeight: number = getGlobalData('navHeight');
    setNav({
      statusBarHeight,
      navHeight
    })
  })
  return (
    <View className="navigation-bar" style={{height: `${nav.navHeight}rpx`, paddingTop: `${nav.statusBarHeight}rpx`}}>
      { title }
      <View className="navigation-bar-left">
        {/* {icon?.value && <AtIcon size={icon.size} color={icon.color} value={icon.value}></AtIcon>} */}
        { leftTitle }
      </View>
    </View>
  );
}

export default NavigationBar;
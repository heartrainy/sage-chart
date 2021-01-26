import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import '../global.css';

const defaultOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar',
    showBackground: true,
    backgroundStyle: {
      color: 'rgba(220, 220, 220, 0.8)'
    }
  }]
}

const LineChart = (props) => {
  const {
    id = '',
    className = '',
    style = {},
    option = {}
  } = props

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart.setOption(Object.keys(option).length === 0 ? defaultOption : option);

    // 高宽度自适应
    window.addEventListener("resize", () => {
      myChart.resize();
    });

  }, [])

  const lastClassName = `sage-chart-wrap ${className}`

  return (
    <div id={id} className={lastClassName} style={style}></div>
  )
}

export default LineChart;
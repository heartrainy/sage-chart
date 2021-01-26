import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './style.css';

const defaultOption = {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: '搜索引擎' },
        { value: 735, name: '直接访问' },
        { value: 580, name: '邮件营销' },
        { value: 484, name: '联盟广告' },
        { value: 300, name: '视频广告' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

const PieChart = (props) => {
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

export default PieChart;
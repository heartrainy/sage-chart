import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './style.css';

const defaultOption = {
  title: {
    text: '折线图堆叠'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
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

    return(
      <div id={id} className={lastClassName} style={style}></div>
    )
}

export default LineChart;
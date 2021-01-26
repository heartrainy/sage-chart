import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import './style.css';

const SageChart = (props) => {
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
      myChart.setOption(option);
  
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

export default SageChart;
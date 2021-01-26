import React from 'react';
import ReactDOM from 'react-dom';
import SageChart from './components/SageChart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  }

  return (
    <div>
      <SageChart id="demo-bar-1" option={option} />
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) { module.hot.accept() }

ReactDOM.render(<App />, document.getElementById('root'));
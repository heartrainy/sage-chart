import React from 'react';
import ReactDOM from 'react-dom';
import Line from './components/line';

const App = () => {
  return (
    <div>
      <Line id="demo-line-1" style={{width: '100%', height: '500px'}} />
    </div>
  )
}

//要实现局部热更新，必须要添加此句
if (module.hot) {module.hot.accept()}

ReactDOM.render(<App />, document.getElementById('root'));
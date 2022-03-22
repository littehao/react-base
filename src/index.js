import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';  // 引入 Provider
import store from './store'

ReactDOM.render(
  // 把store 挂载到Provider上面使下面全局可以获取store里面数据
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

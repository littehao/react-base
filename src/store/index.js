import { createStore, applyMiddleware, compose} from 'redux';
//当我们有从接口请求的数据需要存储到redux中时候，我们可以直接在redux发送网络请求，相当于一个中间件，当我们请求的时候可以做一些事，类似expree和koa
// import thunk from 'redux-thunk';  //处理redux里面的异步请求
//应用一些中间件
// const storeEnhancer =  applyMiddleware(thunk)
// const store = createStore(reducer,storeEnhancer)

import reducer from './reducer';
//增强函数  compose 实现中间件的功能
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(reducer,composeEnhancers());
export default store;
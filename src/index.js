import React from 'react'
import ReactDOM from 'react-dom'
// 1
import { createStore } from 'redux';

import Todo from './components/todos.js';
import reduces from './reducers/todos-reduces.js';

const initState =  { list:['hello 你好']}
const store = createStore( reduces, initState );


ReactDOM.render(
	<Todo  store={store}/>,
	document.getElementById('root')
)




// 通过订阅数据变化时访问的方法 来更新页面
// store.subscribe(render)











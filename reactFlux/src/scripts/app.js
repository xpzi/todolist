/* todolist */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Todolist from './flux/components/todolistController.jsx';

var app = document.getElementById('app');

ReactDOM.render(
	<Todolist />,
	app
);

if(  module.hot ){
	module.hot.accept();
}

/*
react fluc todo list 步骤

前提： 基本的 react环境已经搭建完毕

第一步：  初始化
	》 在 constroller中读取 store 的数据
	》 在todolist组件中渲染出初始数据
	
第二步： 添加 item 流程
	》 将tosolist中的数据传到父组件 Constroller中
	》 执行 constroller中的添加方法  方法将调用  action中 添加方法
	》 action中的活动事件处理方法经过一系列处理后，将数据传输到 Dispatcher中
	》 Dispatcher 通过事件类型 和数据在做一些处理 然后修改store中的list数据
	》 数据修改后，更具需要，在由store通知constroller更新视图
	
	
	










*/


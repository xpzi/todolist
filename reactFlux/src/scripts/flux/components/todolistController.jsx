'use strict';
import React from 'react';

import Todolist from './todulist.jsx';
import Store from '../stores/todolistStore.jsx';
import Action from '../actions/todolistActions.jsx';

export default React.createClass({
	
	// 生命周期函数  第一次加载才运行该方法
	// 初始化的数据
	getInitialState(){
		return {
			text: Store.getText(),
			list: Store.getList()
		}
	},
	
	// 必须的生命周期函数
	// 视图渲染
	render(){
		return (
			<Todolist ref="todolist" 
				onTextvalue={this.changeTextValue} 
				onEnterHandle={this.addlistItem} 
				list={this.state.list} 
				textvalue={this.state.text}  
				onClick={this.delItem}
			/>
		)
	},
	
	// 数据控制流传输 页面的 响应
	// 删除一项
	delItem( event) {
		var index = event.target.dataset.index;
		Action.todolist('DEL_ITEM', index);
	},
	// 添加一项 
	addlistItem( event ){
		if(event.keyCode == 13 ){
			var text = event.target.value;
			if( text != '' ){
				Action.todolist('ADD_ITEM', text);
				event.target.value = '';
			}
		}
	},
	// 改变TextValue
	changeTextValue( event ){
		Action.todolist('change_textvale', event.target.value);
	},
	// TextVlaue被改变时 更新输入框 从而达到双向绑定
	setNewValue( text ){
		this.refs.todolist.refs.newItem.value= text;
	},
	
	
	// 生命周期函数 ，render之后
	componentDidMount() {
		
		// render之后才能更新的数据  实现数据双向绑定的一部分
		this.setNewValue( this.state.text );
		
		//  注册事件  将事件类型注册到 ， 通过在发在数据中注册过的事件，将数据更新到视图中
		// 注册，方法就是用来实现 数据更新的，数据更新操做就是从数据（store）中传到view中，
		//所以按照 flux架构思想 更新方法只能由store调用
		Store.on( 'ADD_ITEM',  this._updataList);
		Store.on( 'DEL_ITEM',  this._updataList);
		Store.on( 'change_textvale',  this._updata_textvale);
	},
	
	// 更新list
	_updataList(){
		this.setState({
			list: Store.getList()
		});
	},

	// 更新textvalu
	_updata_textvale(){
		this.setState({
			text: Store.getText()
		});
	},
	
	// 生命周期函数 ，组件销毁之前
	// 有必要 移除监听事件， 有利于内容管理
	componentWillUnmount(){
		Store.removeListener( 'ADD_ITEM',  this._updataList);
		Store.removeListener( 'DEL_ITEM',  this._updataList);
		Store.removeListener( 'change_textvale',  this._updata_textvale);
	}
});

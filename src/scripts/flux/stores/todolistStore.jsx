// 使用 node 事件
import { EventEmitter } from 'events';

// 使用  es6 的方法  合并对象
export default Object.assign({},EventEmitter.prototype, {
	// 数据
	data: {
		list:[],
		text: 'hello'
	},
	
	
	// 读取数据
	getList(){
		return this.data.list;
	},
	getText(){
		return this.data.text;
	},
	
	
	// 修改数据
	addListItemHandler(text){
		this.data.list.push(text);
	},
	delListItemHandler( id ){
		this.data.list.splice(id, 1);
	},
	changeTextValueHandler( text ){
		this.data.text = text;
	},
	
	
	// 事件响应函数
	// 添加事件监听
	// 可以直接使用原生支持的事件方法
//	addListener( type, callback   ){
//		this.on( type, callback);
//	},
//	// 移除事件监听
//	removeListener( type, callback   ){
//		this.removeListener( type, callback);
//	}

});

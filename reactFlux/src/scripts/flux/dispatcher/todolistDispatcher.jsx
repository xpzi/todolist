import { Dispatcher } from 'flux';
import Store from '../stores/todolistStore.jsx';

let todolistDispactcher = new Dispatcher();

// 通过事件类型 去改变相应的数据
// 当然还可一拦截一些数据传输， 让它做另外的事情或不在继续了
todolistDispactcher.register( (action) => {
	
	switch( action.actionType ){
		case 'ADD_ITEM':
			Store.addListItemHandler( action.data );
			break;
		case 'DEL_ITEM':
			Store.delListItemHandler( action.data );
			break;
		case 'change_textvale':
			Store.changeTextValueHandler( action.data );
			break;
	}
	// 这个么 用来更新视图的
	// 不是所有的改变 都需要更新的化， 根据实际情况 改变位置
	Store.emit(action.actionType);
});


export default todolistDispactcher;
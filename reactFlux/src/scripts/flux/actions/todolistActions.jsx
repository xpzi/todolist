
// 这是什么情况呀  把数据传输到 Dispatcher中去了
import Dispatcher from '../dispatcher/todolistDispatcher.jsx';


// 目前这里只做了简单的转发
// 可以扩展功能，
	// 新增方法，对action 分类管理
	// 新增逻辑， 可做拦截什么的 数据转换什么的
export default {
	todolist( type, data ){
		Dispatcher.dispatch({
			actionType: type,
			data: data
		});
	}
	
}

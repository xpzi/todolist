import Action from '../action/todos-action.js';
export default ( state = { list: []}, action  ) => {
	
	switch( action.type){
		case Action.LIST_ADDITEM: 
			state.list.push( action.text);
			return state;
		case Action.LIST_DELITEM: 
			state.list.splice(action.index, 1);
			return state;

		default: 
			return state;
	}

}
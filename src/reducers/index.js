// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }


export default ( state = { text: 'defa'}, action  ) => {

	switch( action.type){
		case 'UPDATA': 
			state.text = action.text 
			return state;
			break;
		case 'arr': 
			state.arr.push( action.text);
			return state;
		case 'del': 
			state.arr.splice(action.index, 1);
			return state;

		default: 
			return state;
	}

}
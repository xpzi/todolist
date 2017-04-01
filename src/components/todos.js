import React from 'react';
import action from '../action/todos-action.js';


var store = {};

// 2 
class Todo extends React.Component {
	constructor(props) {
		super(props);
		store = this.props.store;
		this.state = store.getState();

		store.subscribe( this.updataView.bind(this) );
	}
	
	updataView(){
		const newState  = store.getState();
		this.setState( newState );
	}

	
	listPush(){
		// store.dispatch( action.listAddItem(this.refs.additem.value )  )
		this.dispatch( "listAddItemAction", this.refs.additem.value  );
	}

	listDel(e){
		this.dispatch( "listDelItemAction", e.currentTarget.dataset.index );
	}
	enterListPush(e){
		e.key !==  'Enter'  || this.listPush()
	}

	dispatch( type, value  ){
		store.dispatch( action[type](value));
	}

	render() {
		return <div>
			<h3>hello : todo list</h3>
			<div> 在这里输入内容：<input type="text" ref="additem"  onKeyUp={this.enterListPush.bind(this)}  />  <button onClick={this.listPush.bind(this) }>添加一项</button> </div>
			<div style={{marginTop: 20+ 'px'}}>
				{
					this.state.list.map( (item, index) => {
						return <p key={index}><i>{index}. </i><span>{ item }</span> <button  data-index={index} onClick={ this.listDel.bind(this) }>X</button></p>
					})	
				}
			</div>
		</div>
	}	
}

export default  Todo;



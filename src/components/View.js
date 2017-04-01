import React from 'react';


// 2 
class View extends React.Component {
	constructor(props) {
		super(props);

		// this.state = store.getState();

		// store.subscribe( this.updata.bind(this) );
	}

	
	// updata(){
	// 	this.setState(  store.getState() );
	// }

	sendAction( e ){
		;console.log( e.currentTarget.value  )
		this.props.sendAction( e.currentTarget.value );
	}
	
	listPush(){
		this.props.arrAction( this.refs.info.value );
	}
	listDel(e){
		this.props.delAction( e.currentTarget.dataset.index );
	}

	render() {
		return (
			<div>
				<div> 在这里输入内容：<input  ref="info" onChange={   this.sendAction.bind(this)  }    type="text" ref="info"  /></div>
				<button onClick={ this.listPush.bind(this) }   >添加 </button>
				<div>
					{   
						this.props.data.arr.map( (item, index) => (
							<div key={index}> 
								<span>{index}</span>
								<span> {item}</span> 
								<button 
									onClick={ this.listDel.bind(this) } 
									data-index={index}
								>X</button>
							</div>
						))
					}

				</div>
				<div> <span>更新后的内容</span> <div>{  this.props.data.text }</div> </div>

			</div>

		)
	}	
}

export default  View;


	// render() {
	// 	return (
	// 		<div>
	// 			<div> 在这里输入内容：<input  onChange={  this.sendAction.bind(this)  }    type="text" ref="info"  /></div>
				

	// 			<div> <span>更新后的内容</span> <div>{  this.state.text }</div> </div>
	// 		</div>

	
	// 	)
	// }